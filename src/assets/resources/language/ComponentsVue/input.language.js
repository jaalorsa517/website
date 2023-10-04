export const es = {
  titles: {
    title: "J5V-Input",
    description: "Modo de uso",
    props: "Props",
    styles: "Estilos",
  },
  description: `
  <p>
    El componente J5VInput es un campo de entrada de texto personalizado. Permite al usuario ingresar, 
    editar y texto validar segun tipo de input. Tiene la capacidad para vincular un v-model.
  </p>
  `,
  props: `
  <ul>
  <li><b>type</b> (tipo: String, valor predeterminado: 'text'): Indica el tipo de campo de entrada. Puede ser 'text', 'tel', 'email' o 'number'.</li>
  <li><b>placeholder</b> (tipo: String, valor predeterminado: ''): Texto que se muestra como marcador de posición dentro del campo de entrada. También sirve para complementar el mensaje de Validación, en caso de que esté activado.</li>
  <li><b>name</b> (tipo: String, valor predeterminado: ''): El nombre del campo de entrada, que se enviará junto con el formulario cuando se envíe.</li>
  <li><b>required</b> (tipo: Boolean, valor predeterminado: false): Indica si el campo de entrada es obligatorio. Puede servir al momento de validar formularios.</li>
  <li><b>initialValue</b> (tipo: String, valor predeterminado: ''): Valor para iniciar el componente con un valor predeterminado, en caso que no se vincule un v-model.</li>
  <li><b>disabled</b> (tipo: Boolean, valor predeterminado: false): Desactiva/activa el componente a la edición.</li>
  <li><b>hasFocus</b> (tipo: Boolean, valor predeterminado: false): Indica si el campo de entrada debe tener el foco automáticamente al renderizarse. Sí multiples componentes tienen activada la prop, el focus lo tendrá el último componente.</li>
  <li><b>hasInputEvent</b> (tipo: Boolean, valor predeterminado: false): Indica sí se debe activar las validaciones del input.</li>
  <li><b>hasFocusEvent</b> (tipo: Boolean, valor predeterminado: false): Indica sí se debe activar las validaciones del input.</li>
  <li><b>hasBlurEvent</b> (tipo: Boolean, valor predeterminado: false): Indica sí se debe activar las validaciones del input.</li>
</ul>
  `,
  styles: `
  <p>
    El componente J5VInput utiliza estilos en CSS para su apariencia. Es importante usar estas clases para cambiar los estilos del componente y de la validación.
  </p>
  <code>
.j5v-input: Clase principal del componente de campo de entrada.
.j5v-input-error: Clase para el estilo en caso de fallar la validación.
.j5v-label-error: Clase para el mensaje que sale al fallar la validación.    
  </code>
  `
};
