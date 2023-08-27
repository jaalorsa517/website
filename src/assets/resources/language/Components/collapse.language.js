export const es = {
  titles: {
    title: "J5-Collapse",
    description: "Modo de uso",
    default: "Valores por defecto",
    attributes: "Atributos",
    events: "Eventos"
  },
  description: `
<p>En el html se usa la etiqueta <code inline>j5-collapse</code>. Este es un componente que no usa el Shadow DOM, por lo tanto, se puede asignar estilos desde el proyecto padre. Para eso, hay que tener claro el <a href="https://youtu.be/c3-fse8KPVo" target="_blank" rel="follow">concepto de específicidad</a>, ya que los estilos del web component se montan luego de cargar el DOM.</p>
<p>Para usar este componente, se requiere asignar dos secciones: una para el resumen y otra para el contenido. Para esto, se usa el atributo <code inline>slot</code> con los valores <code inline>summary</code> y <code inline>content</code>.</p>
<pre><code class="language-html">&lt;j5-collapse&gt;
  &lt;section slot=&quot;summary&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;h2&gt;El lorem&lt;/h2&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  &lt;section slot=&quot;content&quot;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at commodi error aut architecto voluptas
      aperiam fugiat accusamus iste rerum porro velit vel cum, eveniet exercitationem quos iusto omnis
      repellat.
    &lt;/p&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at commodi error aut architecto voluptas
      aperiam fugiat accusamus iste rerum porro velit vel cum, eveniet exercitationem quos iusto omnis
      repellat.
    &lt;/p&gt;
  &lt;/section&gt;
&lt;/j5-collapse&gt;
</code></pre>
<p>En el archivo de entrada Javascript se importa la librería y se ejecuta la función <b>j5Collapse</b>.</p>
<pre><code class="language-javascript">// main.js
// Importar la librería y seleccionar j5Collapse
import { j5Collapse } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5Collapse();
</code></pre>`,
default:`<p>El componente trae valores por defecto, que se pueden personalizar de acuerdo a la necesidad requeridad. 
El objetivo de estos valores es personalizar los estilos a través de Javascript o CSS. Estos valores se encuentra en el selector CSS de etiqueta <code inline>j5-collapse</code></p>
<pre><code class="language-css">j5-collapse {
  display: block;
  width: 500px;
  color: #112e09;
  font-size: 1em;
  font-family: &quot;Roboto&quot;, sans-serif;
}
</code></pre>
<p>Estos son los nombres que tienen los elementos internos, para los casos que se requieran modificar los estilos</p>
<pre><code class="language-javascript">Componente: \`j5-collapse\`,
Contenedor: \`j5-collapse__container\`,
</code></pre>`,
attributes:`
<ul>
<li><b>eventmanual [string = true | false]:</b> Atributo para indicar si el acordeón se activa con darle click al <em>slot summary</em> o sí se prefiere que se active con algun evento del slot summary. Por defecto es <code inline>false</code>. <b>Nota:</b> Cualquier valor que no sea válido, el atributo tomará el valor por defecto. 
<pre><code >&lt;j5-collapse class=&quot;collapse dos&quot; eventmanual=&quot;true&quot;&gt;
  &lt;section slot=&quot;summary&quot; class=&quot;summary title&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;h2&gt;El lorem&lt;/h2&gt;
      &lt;button class=&quot;btn summary&quot;&gt;Leer texto&lt;/button&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  &lt;section slot=&quot;content&quot; id=&quot;content2&quot; class=&quot;content dos&quot;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at commodi error aut architecto
      voluptas aperiam fugiat accusamus iste rerum porro velit vel cum, eveniet exercitationem quos iusto
      omnis repellat.
    &lt;/p&gt;
  &lt;/section&gt;
&lt;/j5-collapse&gt;
&lt;script&gt;
  const btn = document.querySelector(&quot;.btn&quot;);
  const collapse2 = document.querySelector(&quot;.collapse.dos&quot;);
  btn.addEventListener(&quot;click&quot;, () =&gt; {
    collapse2.setAttribute(&quot;isopen&quot;, &quot;true&quot;);
  });
&lt;/script&gt;
</code></pre>
</li>
<li><b>isopen [string= true | false]:</b> Atributo para indicar si el <em>slot content</em> se muestra o no. Por defecto es <code inline>false</code>. <b>Nota:</b> Cualquier valor que no sea válido, el atributo tomará el valor por defecto.
<pre><code class="language-html">&lt;j5-collapse isopen=&quot;true&quot;&gt;
  &lt;section slot=&quot;summary&quot; class=&quot;summary title&quot;&gt;
    &lt;h2&gt;El lorem&lt;/h2&gt;
  &lt;/section&gt;
  &lt;section slot=&quot;content&quot;&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at commodi error aut architecto
      voluptas aperiam fugiat accusamus iste rerum porro velit vel cum, eveniet exercitationem quos iusto
      omnis repellat.
    &lt;/p&gt;
  &lt;/section&gt;
&lt;/j5-collapse&gt;
</code></pre>
</li>
</ul>`,
events:`
<ul>
<li><b>isOpen:</b> Evento que envía el estado del acordeón, abierto o cerrado. La información del estado se envía dentro un objeto llamado <code inline>detail</code>, dentro se envía el valor <code inline>isOpen</code> con su respectivo estado.
<pre><code>const acordeon = document.querySelector(&quot;j5-collapse&quot;);
acordeon.addEventListener(&quot;isOpen&quot;, (e) =&gt; {
  console.log(e.detail); //{isOpen: true} || {isOpen: false}
});
</code></pre>
</li>
</ul>
  `,
}