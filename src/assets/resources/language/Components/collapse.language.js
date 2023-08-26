export const es = {
  titles: {
    title: "J5-Carousel",
    description: "Características",
    default: "Valores por defecto",
    attributes: "Atributos",
  },
  description: `
  <h4 id="instrucciones">Instrucciones</h4>
<p>En el html se usa la etiqueta <code>j5-collapse</code>. Este es un componente que no usa el Shadow DOM, por lo tanto, se puede asignar estilos desde el proyecto padre. Para eso, hay que tener claro el <a href="https://youtu.be/c3-fse8KPVo">concepto de específicidad</a>, ya que los estilos del web component se montan luego de cargar el DOM.</p>
<p>Para usar este componente, se requiere asignar dos secciones: una para el resumen y otra para el contenido. Para esto, se usa el atributo <code>slot</code> con los valores <code>summary</code> y <code>content</code>.</p>
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
<p>En el archivo de entrada Js se importa la librería y se ejecuta la función <strong>j5Collapse</strong>.</p>
<pre><code class="language-javascript">// main.js
// Importar la librería y seleccionar j5Collapse
import { j5Collapse } from &quot;@jaalorsa/j5-components&quot;;
// Iniciar el componente al ejecutar la función
j5Collapse();
</code></pre>
<h4 id="valores-por-defecto">Valores por defecto</h4>
<p>Se encuentra en el selector CSS de etiqueta <code>j5-collapse</code></p>
<pre><code class="language-css">j5-collapse {
  display: block;
  width: 500px;
  color: #112e09;
  font-size: 1em;
  font-family: &quot;Roboto&quot;, sans-serif;
}
</code></pre>
<h4 id="nombre-de-las-clases-de-los-elementos-internos">Nombre de las clases de los elementos internos</h4>
<pre><code class="language-javascript">Componente: \`j5-collapse\`,
Contenedor: \`j5-collapse__container\`,
</code></pre>
<h4 id="atributos">Atributos</h4>
<ul>
<li><strong>eventmanual [string = true | false]:</strong> Atributo para indicar si el acordeón se activa con darle click al <em>slot summary</em> o sí se prefiere que se active con algun evento del slot summary. Por defecto es <code>false</code>. <strong>Nota:</strong> Cualquier valor que no sea válido, el atributo tomará el valor por defecto. |<pre><code class="language-html">&lt;j5-collapse class=&quot;collapse dos&quot; eventmanual=&quot;true&quot;&gt;
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
<li><strong>isopen [string= true | false]:</strong> Atributo para indicar si el <em>slot content</em> se muestra o no. Por defecto es <code>false</code>. <strong>Nota:</strong> Cualquier valor que no sea válido, el atributo tomará el valor por defecto.<pre><code class="language-html">&lt;j5-collapse isopen=&quot;true&quot;&gt;
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
</ul>
<h4 id="eventos">Eventos</h4>
<ul>
<li><strong>isOpen:</strong> Evento que envía el estado del acordeón, abierto o cerrado. La información del estado se envía dentro un objeto llamado <code>detail</code>, dentro se envía el valor <code>isOpen</code> con su respectivo estado.<pre><code class="language-javascript">const acordeon = document.querySelector(&quot;j5-collapse&quot;);
acordeon.addEventListener(&quot;isOpen&quot;, (e) =&gt; {
  console.log(e.detail); //{isOpen: true} || {isOpen: false}
});
</code></pre>
</li>
</ul>

  `,
  default: ``,
  attributes: ``,
}