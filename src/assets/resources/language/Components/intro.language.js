export const es = {
  titles: {
    title: "J5-Components",
    components: "Componentes",
    instructions: "Instrucciones",
  },
  description: `
      <p>
        La librería de componentes web es una solución esencial para los desarrolladores de JavaScript en su
        día a día. Diseñada en JavaScript puro, esta potente librería se convierte en un recurso versátil y
        adaptable que puede emplearse en una amplia variedad de proyectos, sin importar el framework
        utilizado.
      </p>
      <p>
        Al utilizar esta librería, los desarrolladores pueden ahorrar tiempo y esfuerzo, ya que no necesitan
        reinventar la rueda al crear cada componente desde cero. Además, al estar construida en JavaScript
        vanilla, se integra sin problemas en cualquier entorno de desarrollo existente, lo que brinda
        flexibilidad y compatibilidad sin restricciones.
      </p>
      <p>
        Otra ventaja destacada de esta librería es su enfoque en la modularidad y la reutilización de código.
        Los componentes están diseñados de manera modular, lo que significa que se pueden combinar y
        personalizar fácilmente para adaptarse a las necesidades específicas de cada proyecto. Esto promueve
        la eficiencia en el desarrollo y permite mantener un código limpio y fácilmente mantenible.
      </p>  
  `,
  features: `
  <p>Para instalar la librería, ejecutar en la consola</p>
        <code lang="bash">
npm install @jaalorsa/j5-components
        </code>
        <p>
          Para usar la librería, se declara en el html deseado, importar la función inicializadora del web
          component en el archivo javascript principal y ejecutarla. Por ejemplo:
        </p>
        <code>
// En el HTML
<j5-toggle></j5-toggle>
// En el JS
import { j5Toggle } from "@jaalorsa/j5-components";
j5Toggle();
        </code>
        <p>Las característica que tiene la librería J5-Components son:</p>
        <ul>
          <li>
            <p>
              J5-Components está hecha con Typescript, por lo que si se usa cualquier IDE con autocompletado,
              tiene a disposición la ayuda del IDE.
            </p>
          </li>
          <li>
            <p>Toda etiqueta tiene que tener etiqueta de apertura y cierre.</p>
          </li>
          <li>
            <p>Posibilidad de insertar componentes web en cualquier lugar de la página web.</p>
          </li>
          <li>
            <p>Flexibilidad de los componentes, al permitir personalizares los estilos y funcionalidades.</p>
          </li>
          <li>
            <p>
              Todos los componentes heredan de una clase Abstracta, la cual tiene una función, llamada
              <b>getElement</b> o <b>getElements</b>, que permite acceder a cualquier elemento interno del Shadow Dom.
            </p>
            <code>
const toggle = document.querySelector("j5-toggle");
const containerShadow = toggle.getElement(".j5-toggle__container");
            </code>
          </li>
          <li>
            <p>
              Personalizar los estilos de los componentes de acuerdo a la necesidad del proyecto. Cada
              componente tiene definidas unas
              <strong>variables de CSS</strong>
              , que al reescribirlas se pueden personalizar los estilos. También los tamaños vienen definidos
              en unidades
              <b>
                <i>em</i>
              </b>
              , por lo que modificando el
              <b>
                <i>font-size</i>
              </b>
              de un componente, se puede modificar el tamaño de todos los componentes. Además, componentes que
              no tengan ShadowDom, se puede personalizar todo lo que se requiera.
              <b>TENER EN CUENTA</b>
              los fundamentos de CSS en el tema de especificidad. Más información en:
              <a href="https://developer.mozilla.org/es/docs/Web/CSS/Specificity" rel="nofollow">
                CSS Especificidad
              </a>
            </p>
            <code>
j5-toggle { 
  font-size: 10px; 
  --backWidth: 6em; 
  --backHeight: 3em; 
  --backColorActive: green;
  --backColorInactive: gray; 
  ...; 
}
            </code>
          </li>
        </ul>
  `,
};
