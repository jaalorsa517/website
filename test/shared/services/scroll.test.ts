import { describe, it, expect, vi } from "vitest";
import { scrollToElement } from "@/shared/services/scroll";

describe("scroll.ts", () => {
  // Mock del objeto window
  const createMockWindow = () => ({
    scrollY: 0,
    scrollTo: vi.fn(),
    requestAnimationFrame: vi.fn(callback => {
      // Ejecutamos el callback inmediatamente con un tiempo que simula
      // que ha pasado el tiempo suficiente para completar la animación
      setTimeout(() => callback(performance.now() + 1000), 0);
      return 1;
    })
  });

  it("debería resolver inmediatamente si no se proporciona un elemento", async () => {
    const mockWindow = createMockWindow();
    
    await scrollToElement({
      element: null as unknown as HTMLElement,
      window: mockWindow as unknown as Window
    });
    
    expect(mockWindow.scrollTo).not.toHaveBeenCalled();
  });

  it("debería resolver inmediatamente si la distancia a recorrer es cero", async () => {
    const mockWindow = createMockWindow();
    const elementMock = {
      getBoundingClientRect: () => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      })
    } as unknown as HTMLElement;

    await scrollToElement({
      element: elementMock,
      window: mockWindow as unknown as Window
    });

    expect(mockWindow.scrollTo).not.toHaveBeenCalled();
  });

  it("debería calcular correctamente la posición del elemento", async () => {
    const mockWindow = createMockWindow();
    mockWindow.scrollY = 50;
    
    const elementMock = {
      getBoundingClientRect: () => ({
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      })
    } as unknown as HTMLElement;

    await scrollToElement({
      element: elementMock,
      duration: 100,
      window: mockWindow as unknown as Window
    });

    expect(mockWindow.scrollTo).toHaveBeenLastCalledWith(0, 150); // 50 (scrollY) + 100 (top)
  }, 10000); // Aumentamos el timeout para este test

  it("debería aplicar el offset correctamente", async () => {
    const mockWindow = createMockWindow();
    const elementMock = {
      getBoundingClientRect: () => ({
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      })
    } as unknown as HTMLElement;

    await scrollToElement({
      element: elementMock,
      duration: 100,
      offset: 20,
      window: mockWindow as unknown as Window
    });

    expect(mockWindow.scrollTo).toHaveBeenLastCalledWith(0, 80); // 100 - 20
  }, 10000); // Aumentamos el timeout para este test

  it("debería manejar correctamente cuando la posición actual es mayor que la posición objetivo", async () => {
    const mockWindow = createMockWindow();
    mockWindow.scrollY = 200;
    
    const elementMock = {
      getBoundingClientRect: () => ({
        top: -50,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0
      })
    } as unknown as HTMLElement;

    await scrollToElement({
      element: elementMock,
      duration: 100,
      window: mockWindow as unknown as Window
    });

    expect(mockWindow.scrollTo).toHaveBeenLastCalledWith(0, 150); // 200 + (-50)
  }, 10000); // Aumentamos el timeout para este test
});
