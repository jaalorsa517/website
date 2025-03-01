/**
 * Realiza un desplazamiento suave hacia un elemento HTML usando vanilla JS y requestAnimationFrame
 * Esta implementación es compatible con navegadores antiguos que no soportan scroll-behavior: smooth
 * @param params - Objeto con los parámetros de configuración
 * @param params.element - Elemento HTML al que se desea desplazar
 * @param params.duration - Duración del desplazamiento en milisegundos (por defecto 500ms)
 * @param params.offset - Desplazamiento adicional desde la parte superior del elemento (por defecto 0)
 * @param params.window - Objeto window para hacer la función más testeable (por defecto window global)
 * @returns Promise que se resuelve cuando el desplazamiento ha finalizado
 */
export const scrollToElement = ({
  element,
  duration = 500,
  offset = 0,
  window = globalThis.window
}: {
  element: HTMLElement;
  duration?: number;
  offset?: number;
  window?: Window;
}): Promise<void> => {
  return new Promise((resolve) => {
    if (!element) {
      resolve();
      return;
    }

    // Posición actual del scroll
    const startPosition = window.scrollY;
    
    // Posición del elemento al que queremos desplazarnos
    const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
    
    // Distancia a recorrer
    const distance = targetPosition - startPosition;
    
    // Si no hay distancia que recorrer, resolvemos inmediatamente
    if (distance === 0) {
      resolve();
      return;
    }

    let startTime: number | null = null;
    
    // Función de ease-in-out cúbica para suavizar el movimiento
    const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    // Función de animación que se ejecutará en cada frame
    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      
      // Tiempo transcurrido
      const timeElapsed = currentTime - startTime;
      
      // Calculamos la posición usando una función de ease-in-out
      const scrollPosition = easeInOutCubic(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      
      // Realizamos el scroll
      window.scrollTo(0, scrollPosition);
      
      // Si no hemos llegado al final de la animación, solicitamos el siguiente frame
      if (timeElapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        // Nos aseguramos de que el scroll llegue exactamente a la posición deseada
        window.scrollTo(0, targetPosition);
        resolve();
      }
    };
    
    // Iniciamos la animación
    window.requestAnimationFrame(animateScroll);
  });
};
