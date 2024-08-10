export const es = {
  titles: {
    title: "J5-Toggle",
    description: "Modo de uso",
    default: "Valores por defecto",
    attributes: "Atributos",
    events: "Eventos",
  },
  description: `
<p>En el html se usa la etiqueta <code inline>j5-toggle</code>. Este elemento usa el Shadow DOM, por lo que personalizar los estilos requiere sobreescribir las variables de CSS.</p>
<pre><code class="language-html">&lt;j5-toggle&gt;&lt;/j5-toggle&gt;
&lt;j5-toggle checked=&quot;true&quot;&gt;&lt;/j5-toggle&gt;
&lt;j5-toggle checked=&quot;true&quot; label=&quot;Incorrecto/Correcto&quot;&gt;&lt;/j5-toggle&gt;
&lt;j5-toggle label=&quot;Inactivo/Activo&quot;&gt;&lt;/j5-toggle&gt;
</code></pre>
<p>En el archivo de entrada de Javascript, se importa la librería y se ejecuta la función <b>j5Toggle</b>.</p>
<pre><code class="language-javascript">// main.js
// Importar la librería y seleccionar j5Toggle
import { j5Toggle } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5Toggle();
</code></pre>
<p>O se puede inyectar todo desde javascript</p>
<pre><code class="language-javascript">import { j5Toggle } from &quot;@/main&quot;;
j5Toggle();
const body = document.body;
const _j5Toggle = document.createElement(&quot;j5-toggle&quot;);
body.appendChild(_j5Toggle);
_j5Toggle.setAttribute(&quot;label&quot;, &quot;Inactivo/Activo&quot;);
_j5Toggle.setAttribute(&quot;checked&quot;, &quot;true&quot;);
</code></pre>
<p>Es <b>importante</b> tener en cuenta que la asignación de atributos se tiene que hacer luego que se agrega el elemento al DOM.</p>`,
default:`
<p>El componente trae valores por defecto, que se pueden personalizar de acuerdo a la necesidad requeridad. El objetivo de estos valores es personalizar los estilos a través de Javascript o CSS. Estos valores se encuentra en el selector CSS de etiqueta <code inline>j5-toggle</code></p>
<pre><code class="language-css">j5-toggle {
  width: fit-content;
  display: block;
  font-size: 10px;
  box-sizing: border-box;
  --backWidth: 6em;
  --backHeight: 3em;
  --backColorActive: green;
  --backColorInactive: gray;
  --backColorSwitch: white;
  --swSize: calc(var(--backHeight) - 2px);
  --labelSize: 1.6em;
  --labelColor: darkgray;
  --labelFont: sans-serif;
  --borderRadius: 10em;
}
</code></pre>
<p>Estos son los nombres que tienen los elementos internos, para los casos que se requieran modificar los estilos</p>
<pre><code class="language-javascript">Componente: \`j5-toggle\`,
Contenedor: \`j5-toggle__container\`,
Input tipo radio, toggle lógico: \`j5-toggle__radio\`,
Toggle visual: \`j5-toggle__switch\`,
Label: \`j5-toggle__label\`,
</code></pre>`,
attributes:`
<ul>
<li><p><b>checked [true, false]:</b> Atributo para indicar el estado del toggle.</p>
<pre><code class="language-html">&lt;j5-toggle checked=&quot;true&quot;&gt;&lt;/j5-toggle&gt;
&lt;j5-toggle checked=&quot;false&quot;&gt;&lt;/j5-toggle&gt;
</code></pre>
</li>
<li><p><b>label [string]:</b> Atributo para indicar el texto del label. Este tiene una <b>característica especial</b>: si pasa un texto separado por un slash (&quot;/&quot;), el toggle mostrará el primer texto cuando sea falso y el segundo cuando sea verdadero; llegado el caso donde solo se pasa un string normal, se muestra dicho string.</p>
<pre><code class="language-html">&lt;!-- Cuando sea falso, mostrará Inactivo --&gt;
&lt;!-- Cuando sea Verdadero, mostrará Activo --&gt;
&lt;j5-toggle label=&quot;Inactivo/Activo&quot;&gt;&lt;/j5-toggle&gt;
&lt;j5-toggle label=&quot;Viajar&quot;&gt;&lt;/j5-toggle&gt;
****
</code></pre>
</li>
</ul>`,
events:`
<ul>
<li><b>change:</b> Evento que envía el estado del toggle. La información del estado se envía dentro un objeto llamado <code inline>detail</code>, dentro se envía el valor <code inline>isChecked</code> con su respectivo estado.
<pre><code class="language-javascript">const toggle = document.querySelector(&quot;.my-toggle&quot;);
toggle.addEventListener(&quot;change&quot;, (e) =&gt; {
  console.log(e.detail); //{isChecked: true} || {ischecked: false}
});
</code></pre>
</li>
</ul>
`
}