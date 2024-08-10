export const es = {
  titles: {
    title: "J5V-Icons",
    description: "Modo de uso",
    props: "Props",
    providers: "Personalizar iconos",
  },
  description: `
  <p>
    El componente J5VIcons es un componente de Vue que renderiza un ícono SVG basado en el nombre proporcionado.
  </p>
  <p>
    Es un componente muy útil para usar iconos en tu aplicación de una manera muy sencilla. El icono se comporta 
    como una Font común: Color (color), font-size (tamaño), etc.
  </p>
  <p>
    El componente posee una constantes, <i>ICONS_NAMES</i>, la cual contiene todos los nombre de los iconos disponibles. 
    O se puede inyectar iconos propios. Todo de acuerdo a los requisitos necesitados.
  </p>
  `,
  props: `
  <p>
    Para usar el componete, basta con pasar la prop "name" para que el icono SVG se renderice.
  </p>
  <code>
<J5VIcons name="github" />
  </code>
  `,
  providers: `
  <p>
    Sí se desea usar SVG propios, se puede hacer lo siguiente:
  </p>
  <ol>
    <li>
      Crear un obeto con el nombre del icono SVG y el SVG como string.
    </li>
    <li>
      Inyectarlo con la función de Vue, Provider y el nombre <b>j5v-icons</b>.
    </li>
    <li>
    Usarlo normalmente, al pasarlo el nombre como prop
    </li>
<code>
// En el JS
import { provide } from "vue"
const myIcons ={
  icon1: \`<svg> <path></path> </svg>\`,
}
provide("j5v-icons", myIcons)

// En el HTML
<J5VIcons name="icon1" />
  </code>
  </ol>
  `
};
