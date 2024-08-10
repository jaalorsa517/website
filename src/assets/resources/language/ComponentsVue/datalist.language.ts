export const es = {
  titles: {
    title: "J5V-Datalist",
    description: "Modo de uso",
    props: "Props",
    events: "Eventos",
    styles: "Estilos",
  },
  description: `
  <p>El componente Datalist es un componente Vue.js, muy similar al componente J5VSelect, con la diferencia que las opciones mostradas son dinámicas y de acuerdo a lo que se programe el componente.
  </p>
  <p>
  El componente tiene 2 modos de uso que no pueden existir simultáneamente:
  </p>
  <ol>
    <li>
      <p>Usando props para valores strings.</p>
      <code><J5VDatalist :hasIcon="true" :options="options" @inputValue="setOption" @itemSelected="selecteds.push($event)" /></code>
    </li>
    <li>
      <p>Usando Slots para mayor personalización.</p>
      <code>
<J5VDatalist :hasIcon="true" v-model="inputValue" @itemSelected="onItemSelected">
  <li class="datalist__item" v-for="option, index in options2" :key="index">
    <span>{{ index }}</span>
    <span>{{ option }}</span>
  </li>
</J5VDatalist>
      </code>
    </li>
  </ol>
  `,
  props: `
  <ul>
<li><b>options</b>: (tipo: <b>Array&lt;string&gt;</b>, valor por defecto: <b>[]</b>) - Las opciones para el componente.</li>
<li><b>placeholder</b>: (tipo: <b>String</b>, valor por defecto: <b>'Buscar...'</b>) - El texto de marcador de posición para el campo de búsqueda.</li>
<li><b>hasIcon</b>: (tipo: <b>Boolean</b>, valor por defecto: <b>false</b>) - Indica si el componente debe mostrar un ícono.</li>
<li><b>icon</b>: (tipo: <b>String</b>, valor por defecto: <b>"find"</b>) - El nombre del ícono a mostrar en el componente. Internamente se usa el componente J5VIcons, así que tener en cuenta el uso de este componente.</li>
</ul>
  `,
  events: `
  <ul >
<li><b>inputValue</b>: Se emite cuando se cambia el valor del campo de búsqueda. El valor emitido es el valor del campo de búsqueda y es un tipo string.</li>
<li><b>itemSelected</b>: Se emite cuando se selecciona una opción. El valor emitido es el valor de la opción y puede ser un tipo string o un objeto tipo HTMLElement (Slots).</li>
</ul>
  `,
  styles: `
  <p>El componente se puede personalizar estilos, segun la necesidad requerida, al usar las siguientes clases:</p>
  <code>.j5v-datalist: clase contenedora.
.j5v-datalist__input: campo de texto.
.j5v-datalist__icon: ícono adyacente al campo de texto.
.j5v-datalist__datalist: lista desplegable.
.j5v-datalist__item: elemento de la lista desplegable. Solo cuando es la opción de props.
.j5v-datalist__mask: máscara para el control del datalist activo.
</code>
  `
};
