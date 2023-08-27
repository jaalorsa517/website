export const es = {
  titles: {
    title: "J5-Json-Transform",
    description: "Modo de uso",
    default: "Valores por defecto",
    attributes: "Atributos",
    events: "Eventos",
  },
  description: `
<p>En el html se usa la etiqueta <code inline>j5-menu-hamburguer</code>. Este es un componente que no usa el Shadow DOM, por lo tanto, se puede asignar estilos desde el proyecto padre. Para eso, hay que tener claro el <a href="https://youtu.be/c3-fse8KPVo" target="_blank" rel="follow">concepto de específicidad</a>, ya que los estilos del web component se montan luego de cargar el DOM.</p>
<pre><code>&lt;j5-menu-hamburguer&gt;
  &lt;h1&gt;Esto es una prueba&lt;/h1&gt;
&lt;/j5-menu-hamburguer&gt;
</code></pre>
<p>En el archivo de entrada Js se importa la librería y se ejecuta la función <b>j5MenuHamburguer</b>.</p>
<pre><code class="language-javascript">// main.js
// Importar la librería y seleccionar j5MenuHamburguer
import { j5MenuHamburguer } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5MenuHamburguer();
</code></pre>
<p>O se puede inyectar todo desde javascript</p>
<pre><code class="language-javascript">const menu2 = document.createElement(&quot;j5-menu-hamburguer&quot;);
menu2.innerHTML = \`
  &lt;li&gt;Hola&lt;/li&gt;
  &lt;li&gt;Adios&lt;/li&gt;
\`;
menu2.setAttribute(&quot;animation&quot;, &quot;slide_in_out_3&quot;);
menu2.setAttribute(&quot;isopen&quot;, &quot;true&quot;);
body.appendChild(menu2);
</code></pre>
<p>Es <b>importante</b> tener en cuenta que la asignación de atributos se tiene que hacer luego que se agrega el elemento al DOM.</p>`,
  default: `
<p>El componente trae valores por defecto, que se pueden personalizar de acuerdo a la necesidad requeridad. El objetivo de estos valores es personalizar los estilos a través de Javascript o CSS. Estos valores se encuentra en el selector CSS de etiqueta<code inline>j5-menu-hamburguer</code></p>
<pre><code class="language-css">j5-menu-hamburguer {
  display: block;
  font-size: 10px;
  position: relative;
  --color: #438c40;
  --colorActive: #438c40;
  --menuPositionTop: 0;
  --menuPositionLeft: 0;
  --menuBackground: #fff;
  --menuWidth: 100vw;
  --menuHeight: 100vh;
  --menuZIndex: 1000;
}
</code></pre>
<p>Para controlar el <b>tamaño</b> del menu (ícono) se hace a través del atributo <code inline>font-size</code> de css.</p>
<p>Estos son los nombres que tienen los elementos internos, para los casos que se requieran modificar los estilos</p>
<pre><code class="language-javascript">Componente: \`j5-menu-hamburguer\`,
Contenedor: \`j5-menu-hamburguer__container\`,
menu: \`j5-menu-hamburguer__menu\`,
linea: \`j5-menu-hamburguer__line\`,
inea Uno: \`j5-menu-hamburguer__line--uno\`,
linea Dos: \`j5-menu-hamburguer__line--dos\`,
linea Tres: \`j5-menu-hamburguer__line--tres\`,
Contenedor del slot: \`j5-menu-hamburguer__containerChild\`
</code></pre>`,
  attributes: `
<ul>
<li><p><b>animation [string = fade_in_out | slide_in_out_1 | slide_in_out_2 | slide_in_out_3 | slide_in_out_4]:</b> Atributo para indicar la animación. El valor por default es <code inline>fade_in_out</code>.</p>
<pre><code class="language-html">&lt;j5-menu-hamburguer&gt;
  &lt;h1&gt;Default es fade_in_out&lt;/h1&gt;
&lt;/j5-menu-hamburguer&gt;
&lt;j5-menu-hamburguer animation=&quot;slide_in_out_1&quot;&gt;
  &lt;h1&gt;slide_in_out_1&lt;/h1&gt;
&lt;/j5-menu-hamburguer&gt;
&lt;j5-menu-hamburguer animation=&quot;slide_in_out_2&quot;&gt;
  &lt;h1&gt;slide_in_out_2&lt;/h1&gt;
&lt;/j5-menu-hamburguer&gt;
&lt;j5-menu-hamburguer animation=&quot;slide_in_out_3&quot;&gt;
  &lt;h1&gt;slide_in_out_3&lt;/h1&gt;
&lt;/j5-menu-hamburguer&gt;
&lt;j5-menu-hamburguer animation=&quot;slide_in_out_4&quot;&gt;
  &lt;h1&gt;slide_in_out_4&lt;/h1&gt;
&lt;/j5-menu-hamburguer&gt;
</code></pre>
</li>
<li><p><b>isopen [string= true | false]:</b> Atributo para indicar si el menu se muestra o no. Por defecto es <code inline>false</code>. <b>Nota:</b> Cualquier valor que no sea válido, el atributo tomará el valor por defecto.</p>
</li>
</ul>
<pre><code class="language-html"> &lt;j5-menu-hamburguer&gt;
   &lt;h1&gt;Default es false&lt;/h1&gt;
 &lt;/j5-menu-hamburguer&gt;
 &lt;j5-menu-hamburguer isopen=&quot;true&quot;&gt;
   &lt;h1&gt;isopen: true&lt;/h1&gt;
 &lt;/j5-menu-hamburguer&gt;
 &lt;j5-menu-hamburguer isopen=&quot;false&quot;&gt;
   &lt;h1&gt;isopen: false&lt;/h1&gt;
 &lt;/j5-menu-hamburguer&gt;
</code></pre>`,
  events: `
<ul>
<li><b>isOpen:</b> Evento que envía el estado del menú, abierto o cerrado. La información del estado se envía dentro un objeto llamado <code inline>detail</code>, dentro se envía el valor <code inline>isOpen</code> con su respectivo estado.
<pre><code class="language-javascript">const menu = document.querySelector(&quot;j5-menu-hamburguer&quot;);
menu.addEventListener(&quot;isOpen&quot;, (e) =&gt; {
  console.log(e.detail); //{isOpen: true} || {isOpen: false}
});
</code></pre>
</li>
</ul>
`,
};
