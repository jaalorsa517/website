export const es = {
  titles: {
    title: "J5-Components-Vue",
    components: "Componentes",
    instructions: "Instrucciones",
  },
  description: `
  <p>
    La librería de componentes Vue, J5-components-vue, es una herramienta para acelerar el 
    desarrollo de aplicaciones en Vue, al ofrecer una amplia gama de componentes prácticos 
    y de uso común. 
  </p>
  <p>
    Con J5-components-vue, se puede aprovechar la reutilización de componentes 
    y ahorrar tiempo valioso al crear aplicaciones con Vue. Con una colección diversa de componentes 
    predefinidos, J5-components-vue se convierte en una opción para mejorar la eficiencia del desarrollo 
    y crear interfaces de usuario atractivas y funcionales.
  </p>
  `,
  features: `
  <p>Para instalar la librería, ejecutar en la consola</p>
        <code lang="bash"> 
npm install @jaalorsa/j5-components-vue 
        </code>
        <p>
          Para usar la librería, es tan sencillo como importar el componente deseado desde la librería y usarlo 
          directamente en el HTML. Por ejemplo:
        </p>
        <code>
// En el Javascript
import { J5VAlert } from "@jaalorsa/j5-components-vue"
// En el HTML
<J5VAlert></J5VAlert>
        </code>
        <p>
          El componente tiene unos estilos predefinidos. Para activarlos se importan el archivo css para que se inyecte al DOM.
        </p>
        <code>
//En un archivo css
@import "@jaalorsa/j5-components-vue/style.css";
// En un archivo Javascript
import "@jaalorsa/j5-components-vue/style.css";
        </code>
        <p>
          <b>Nota: </b> Tener presente que la importación dependerá de la herramienta de empaquetado usado en el proyecto. 
          La herramienta recomendada es <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>.
        </p>
        <p>
          Cada componente tiene sus propios estilos, por lo que se puede personalizar de manera sencilla, al crear una regla
          de estilos con el nombre de la clase del componente. Estas clases se pueden consultar en la documentación de cada componente.
        </p>
  `,
};
