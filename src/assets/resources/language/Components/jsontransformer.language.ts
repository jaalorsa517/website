export const es = {
  titles: {
    title: "J5-Json-Transform",
    description: "Modo de uso",
    default: "Valores por defecto",
  },
  description: `
  <p>En el html se usa la etiqueta <code inline>j5-json-transform</code>. Este es un componente que no usa el Shadow DOM, por lo tanto, se puede asignar estilos desde el proyecto padre. Para eso, hay que tener claro el <a href="https://youtu.be/c3-fse8KPVo" target="_blank" rel="follow">concepto de específicidad</a>, ya que los estilos del web component se montan luego de cargar el DOM.</p>
  <pre><code class="language-html">&lt;j5-json-transform&gt;&lt;/j5-json-transform&gt;</code></pre>
  <p>En el archivo de entrada de Javascript, se importa la librería y se ejecuta la función <b>j5JsonTransform</b>.</p>
  <pre><code>// main.js
// Importar la librería y seleccionar j5JsonTransform
import { j5JsonTransform } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5JsonTransform();</code></pre>
  <p>Otra opción es insertar el componente desde javascript:</p>
  <pre><code class="language-javascript">const jsonTransform = document.createElement(&quot;j5-json-transform&quot;);
document.body.appendChild(jsonTransform);</code></pre>`,
  default: `
  <p>El componente trae valores por defecto, que se pueden personalizar de acuerdo a la necesidad requeridad. El objetivo de estos valores es personalizar los estilos a través de Javascript o CSS. Estos valores se encuentra en el selector CSS de etiqueta  <code inline>j5-json-transform</code></p>
  <pre><code>j5-json-transform {
    display: block;
    width: 500px;
    height: 500px;
    --color_primary: #438c40;
    --color_font: #112e09;
    --color_font_light: #f9f9f9;
    --color_popup: var(--color_font);
    --color_popup_font: var(--color_font_light);
    --font-size: 1em;
    --font-family: &quot;Roboto&quot;, sans-serif;
    --line-height: 1.5;
    --color_error: #bb0000;
}</code></pre>
  <p>Estos son los nombres que tienen los elementos internos, para los casos que se requieran modificar los estilos</p>
  <pre><code>&quot;root&quot;: &quot;j5-json-transform&quot;,
&quot;container&quot;: &quot;j5-json-transform__container&quot;,
&quot;textArea&quot;: &quot;j5-json-transform__textArea&quot;,
&quot;textAreaError&quot;: &quot;j5-json-transform__textArea--error&quot;,
&quot;btnContainer&quot;: &quot;j5-json-transform__btnContainer&quot;,
&quot;btn&quot;: &quot;j5-json-transform__btn&quot;,
&quot;btnCopy&quot;: &quot;j5-json-transform__btn--copy&quot;,
&quot;btnClear&quot;: &quot;j5-json-transform__btn--clear&quot;,
&quot;btnFormat&quot;: &quot;j5-json-transform__btn--format&quot;,
&quot;popup&quot;: &quot;j5-json-transform__popup&quot;,
&quot;textAreaContainer&quot;: &quot;j5-json-transform__textAreaContainer&quot;,
&quot;errorInput&quot;: &quot;j5-json-transform__error&quot;
  </code></pre>
  `,
};
