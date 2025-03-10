export const es = {
  titles: {
    title: "J5V-Select",
    description: "Modo de uso",
    props: "Props",
    styles: "Estilos",
  },
  description: `
  <p>
    El componente J5VSelect es un componente de Vue que renderiza un select, el cual puede recibir una prop 
    con las opciones disponible y se le puede vincular un v-model para el manejo del valor.
  </p>
  <code>
  //TS
  import { J5VSelect, OptionType } from "../../lib/main"

  const options: Array<OptionType> = [
    { value: "red", text: "Red" },
    { value: "green", text: "Green" },
    { value: "blue", text: "Blue" },
  ]
  
  const modelValue = ref("red")
  
  //HTML
<div class="selects">
  <h3>Select <span>{{ modelValue }}</span></h3>
  <J5VSelect :options="options" v-model="modelValue" />
</div>
  </code>
  
  `,
  props: `
  <ul>
    <li><b>options</b> (Array): Un array de objetos que representan las opciones del menú desplegable. Cada objeto debe tener las propiedades "value" y "text", que representan el valor y el texto de la opción, respectivamente. Por defecto, se proporciona un array vacío.</li>
    <li><b>name</b> (String): El nombre del elemento select. Por defecto, no se proporciona ningún nombre.</li>
  </ul>
  `,
  styles: `
  <p>
    El componente se puede personalizar estilos, segun la necesidad requerida, al usar la clase <i>j5v-select</i>.
  </p>
  `
}