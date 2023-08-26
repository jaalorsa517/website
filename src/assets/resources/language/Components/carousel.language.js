export const es = {
  titles: {
    title: "J5-Carousel",
    description: "Características",
    default: "Valores por defecto",
    attributes: "Atributos",
  },
  description: `
      <p>Para usar este componente, en el html se usa la etiqueta 
      <code inline>j5-carousel</code>.
      Este componente usa Shadow Dom, por lo tanto, cuando se
        requiera modificar estilos, se hacen a través de las variables de CSS.</p>
      <code>&lt;j5-carousel&gt;&lt;/j5-carousel&gt;</code>
      <p>En el archivo de entrada Javascript se importa la librería y se ejecuta la función <b>j5Carousel</b>.</p>
      <code>// main.js
// Importar la librería y seleccionar j5Carousel
import { j5Carousel } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5Carousel();</code>
      <p>También se puede insertar el componente desde javascript:</p>
      <code>const carousel = document.createElement(j5-carousel);
carousel.setAttribute(count-slides,3);
carousel.setAttribute(transition-auto, 8000);
carousel.innerHTML = \`&lt;div class=&quot;item&quot;&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
                      &lt;div class=&quot;item&quot;&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
                      &lt;div class=&quot;item&quot;&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
                      &lt;div class=&quot;item&quot;&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
                      &lt;div class=&quot;item&quot;&gt;&lt;span&gt;5&lt;/span&gt;&lt;/div&gt;
                      &lt;div class=&quot;item&quot;&gt;&lt;span&gt;6&lt;/span&gt;&lt;/div&gt;\`
body.appendChild(carousel);</code>
`,
  default: `
      <p>El componente trae valores por defecto, que se pueden personalizar de acuerdo a la necesidad requeridad. 
      El objetivo de estos valores es personalizar los estilos a través de Javascript o CSS. Estos valores se encuentra en el selector CSS de etiqueta <code inline>j5-carousel</code></p>
      <code>j5-carousel {
  display: block;
  width: fit-content;
  font-size: 16px;
  --color_back_arrows: #252525;
  --color_icon: #fff;
  --size_arrows: 1.5em;
  --size_icon: 1.5em;
}</code>
      <p>Estos son los nombres que tienen los elementos internos, para los casos que se requieran modificar los estilos<p>
      <code>&quot;root&quot;: &quot;j5-carousel&quot;,
&quot;container&quot;: &quot;j5-carousel__container&quot;,
&quot;arrow&quot;: &quot;j5-carousel__arrow&quot;,
&quot;arrowLeft&quot;: &quot;j5-carousel__arrow--left&quot;,
&quot;arrowRight&quot;: &quot;j5-carousel__arrow--right&quot;,
&quot;slides&quot;: &quot;j5-carousel__slides&quot;,
&quot;slot&quot;: &quot;j5-carousel__slot&quot;</code>`,
  attributes: `
      <ul>
        <li><b>count-slides [number]:</b> La cantidad máxima de elementos visualizados. Por defecto, es 3.
          <b>Nota:</b> Es importante aclarar que el ancho asignado al web component, afecta este comportamiento.
          <code>&lt;j5-carousel count-slides=&quot;2&quot;&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;5&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;6&lt;/span&gt;&lt;/div&gt;
&lt;/j5-carousel&gt;</code>
        </li>
        <li><b>transition-auto[number]:</b> Activar la transición automática del slider; si no se añade el
          atributo, la transición automática no se activará. Recibe un número que representa los milisegundos para hacer
          la transición. <b>Nota:</b> Este es una atributo no reactivo, por lo que no se puede reasignar luego
          de que el componente se monta en el DOM.
          <code>&lt;j5-carousel transition-auto=&quot;5000&quot;&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;5&lt;/span&gt;&lt;/div&gt;
  &lt;div class=&quot;item&quot;&gt;&lt;span&gt;6&lt;/span&gt;&lt;/div&gt;
&lt;/j5-carousel&gt;</code>
        </li>
      </ul>
  `,
};
