export const es= {
  titles:{
    title: "J5V-Alert",
    description: "Modo de uso",
    props: "Props",
    slots: "Slots",
    events: "Eventos",
    styles: "Estilos",
  },
  description: `
  <p>
    Componente para agregar una alerta. Este componente es personalizable y se puede usar con 
    valores predeterminados o a través de slots para requerimientos con mayor personalización.
  </p>
  <p>
    El objetivo del componente es facilitar el uso de un alerta, para no tener que preocuparse 
    por realizar un componente repetitivo, sino en enfocarse en realizar lógica y usar.
  </p>
  `,
  props:`
  <p>
    El componente se puede personalizar los títulos, la descripción y hasta el texto de los botones; todo 
    a través de las props. También se puede definir sí el componente tendrá un solo botón o los 2 botones (más comunes).
  </p>
  <p>
    Sí el componente requiere tener otras características, se pueden personalizar a traveś de slots.
  </p>
  <p>
    A continuación se muestra las propiedades del componente:
  </p>
  <ul>
    <li><b>hasBtnCancel</b> (tipo: Boolean, valor predeterminado: false): Indica si se debe mostrar el botón de cancelar en el pie de página.</li>
    <li><b>title</b> (tipo: String, valor predeterminado: 'Alerta'): El título del componente de alerta.</li>
    <li><b>body</b> (tipo: String, valor predeterminado: ''): El contenido del cuerpo del componente de alerta.</li>
    <li><b>btnOkText</b> (tipo: String, valor predeterminado: 'Aceptar'): El texto del botón de aceptar.</li>
    <li><b>btnCancelText</b> (tipo: String, valor predeterminado: 'Cancelar'): El texto del botón de cancelar.</li>
  </ul>
  <p>
    En el siguiente ejemplo se muestra como usar las propiedades del componente.
  </p>
  <code>
<J5VAlert v-if="isShowProps" title="Titulo Props" body="Texto inyectado a través de props." btnOkText="Ok"
 :hasBtnCancel="true" @confirm="isShowProps = false">
</J5VAlert>
  </code>
  `,
  slots:`
  <p>
    El componente tiene unas slots disponibles para su personalización. Dichos slots son <b>opcionales</b>.
    Se puede personalizar en estructura HTML como en estilos o funcionalidades.
  </p>
  <p>
    El componente tiene habilitado los siguientes slots:
  </p>
  <ul>
    <li>
      <b>Header:</b>
      Permite personalizar la sección de encabezado del componente de alerta.
    </li>
    <li>
      <b>Body:</b>
      Permite personalizar el cuerpo del componente de alerta.
    </li>
    <li>
      <b>Footer:</b>
      Permite personalizar la sección de pie del componente de alerta.
    </li>
  </ul>
  <p>
    En el siguiente ejemplo se muestra como usar los slots del componente.
  </p>
  <code>
// Con Slots
<J5VAlert >
  <template v-slot:header>
    <h2>Titulo <i>Slots</i></h2>
  </template>
  <template v-slot:body>
    <p>Texto inyectado a través de <b>slots</b>.</p>
  </template>
  <template v-slot:footer>
    <div>
      <button @click="isShowSlots = false">Aprobar</button>
      <button @click="isShowSlots = false">Denegar</button>
    </div>
  </template>
</J5VAlert>
  </code>

  `,
  events:`
  <p>
    El componente tiene el siguiente evento disponible:
  </p>
  <ul>
    <li>
    <b>confirm:</b> Se emite cuando se hace clic en el botón de aceptar o 
    cancelar. El valor emitido es un booleano que indica si se hizo clic en 
    el botón de aceptar (true) o cancelar (false).
    </li>
  </ul>
  `,
  styles:`
  <p>
    El componente tiene la posibilidad de personalizar estilos, sin necesidad de usar los slots. 
    Esto se a través de estilos CSS.
  </p>
  <p>
    El componente dispone de los siguientes nombres de clases CSS:
  </p>
  <code>
.j5v-alert: Clase principal del componente de alerta.
.j5v-alert__content: Clase del contenedor del contenido del componente de alerta.
.j5v-alert__header: Clase del encabezado del componente de alerta.
.j5v-alert__title: Clase del título del componente de alerta.
.j5v-alert__body: Clase del cuerpo del componente de alerta.
.j5v-alert__footer: Clase del pie de página del componente de alerta.
.j5v-alert__button: Clase de los botones del componente de alerta.
  </code>

  `,
}