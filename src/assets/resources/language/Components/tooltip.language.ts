export const es = {
  titles: {
    title: "J5-Tooltip",
    description: "Modo de uso",
    default: "Valores por defecto",
    attributes: "Atributos",
  },
  description:`
<p>En el html se usa la etiqueta <code inline>j5-tooltip</code>. Este es un componente que utiliza el Shadow DOM, por lo que los estilos se tiene que modificar sobrescribiendo las variables de CSS.</p>
<pre><code class="language-html">&lt;j5-tooltip class=&quot;tres&quot; text=&quot;Probando un texto mediano para el tooltip.&quot; startposition=&quot;horizontal&quot;&gt;
  &lt;a href=&quot;#&quot;&gt;Hello a element with display inline&lt;/a&gt;
&lt;/j5-tooltip&gt;
&lt;j5-tooltip
  class=&quot;cuatro&quot;
  text=&quot;Hello World this is a tooltip for example. I am a tooltip and I want to be a tooltip.&quot;
&gt;
  &lt;p&gt;Hello everybody!&lt;/p&gt;
&lt;/j5-tooltip&gt;
</code></pre>
<p>En el archivo de entrada de Javascript, se importa la librería y se ejecuta la función <b>j5Tooltip</b>.</p>
<pre><code class="language-javascript">// main.js
// Importar la librería y seleccionar j5Tooltip
import { j5Tooltip } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5Tooltip();
</code></pre>
<p>O se puede inyectar todo desde javascript</p>
<pre><code class="language-javascript">import { j5Tooltip } from &quot;@jaalorsa/j5-components&quot;;
j5Tooltip();
const tooltip = document.createElement(&quot;j5-tooltip&quot;);
tooltip.innerHTML = \`&lt;p&gt;Tooltip &lt;/p&gt;\`;
tooltip.setAttribute(&quot;text&quot;, \`Este es el tooltip desde Javascript.\`);
tooltip.setAttribute(&quot;startposition&quot;, &quot;horizontal&quot;);
document.querySelector(&quot;.container&quot;).appendChild(tooltip);
</code></pre>`,
default:`
<p>El componente trae valores por defecto, que se pueden personalizar de acuerdo a la necesidad requeridad. El objetivo de estos valores es personalizar los estilos a través de Javascript o CSS. Estos valores se encuentra en el selector CSS de etiqueta <code inline>j5-tooltip</code></p>
<pre><code class="language-css">j5-tooltip {
  width: fit-content;
  height: fit-content;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  --border-width: 10px;
  --background-color: #2d302d;
  --border-transparent: transparent;
  --top: 0;
  --left: 0;
  --bottom: initial;
  --right: initial;
  --right-before: initial;
  --left-before: 20px;
  --bottom-before: 100%;
  --top-before: initial;
  --max-width: auto;
  --min-width: auto;
  --width: auto;
  --height: auto;
  --padding: 8px;
  --fontFamily: initial;
  --fontSize: 0.875em;
  --fontColor: #fff;
  --text-align: start;
}
</code></pre>
<p>Estos son los nombres que tienen los elementos internos, para los casos que se requieran modificar los estilos</p>
<pre><code class="language-javascript">Component: \`j5-tooltip\`,
Contenedor: \`j5-tooltip__container\`,
Tooltip: \`j5-tooltip__tooltip\`,
Tooltip posición norte: \`j5-tooltip__tooltip--norte\`,
Tooltip posición sur: \`j5-tooltip__tooltip--sur\`,
Tooltip posición este: \`j5-tooltip__tooltip--este\`,
Tooltip posición oeste: \`j5-tooltip__tooltip--oeste\`,
Transición tooltip: \`j5-tooltip__tooltip--in-out\`,
</code></pre>`,
attributes:`
<ul>
<li><p><b>text [string]:</b> Atributo para indicar el texto del que muestra el tooltip.</p>
<pre><code class="language-html">&lt;j5-tooltip
  class=&quot;cuatro&quot;
  text=&quot;Hello World this is a tooltip for example. I am a tooltip and I want to be a tooltip.&quot;
&gt;
  &lt;p&gt;Hello everybody!&lt;/p&gt;
&lt;/j5-tooltip&gt;
</code></pre>
</li>
<li><p><b>startposition [horizontal, vertical(default)]:</b> Attributo opcional para indicar sí el tooltip aparece abajo/arriba o derecha/izquierda.</p>
<pre><code class="language-html">&lt;j5-tooltip class=&quot;tres&quot; text=&quot;Probando un texto mediano para el tooltip.&quot; startposition=&quot;vertical&quot;&gt;
  &lt;a href=&quot;#&quot;&gt;Hello a element with display inline&lt;/a&gt;
&lt;/j5-tooltip&gt;
&lt;j5-tooltip class=&quot;tres&quot; text=&quot;Probando un texto mediano para el tooltip.&quot; startposition=&quot;horizontal&quot;&gt;
  &lt;a href=&quot;#&quot;&gt;Hello a element with display inline&lt;/a&gt;
&lt;/j5-tooltip&gt;
</code></pre>
</li>
</ul>`
}