<template lang="pug">
  .exp
    carousel(:dataShow="info")
</template>

<script>
import carousel from "../components/carousel-experiencie";

export default {
  name: "experiencie",
  components: {
    carousel
  },
  data: function() {
    return {
      info: [
        {
          category: "Web",
          datas: [
            // {
            //   title: "Asomufi",
            //   text:
            //     "Aplicación web realizada con VUE donde se integra con una API y se administra el inventario y las finanzas de la distribuidora.",
            //   url: "https://github.com/jaalorsa517/jaalorsa517.github.io",
            //   type: "Empresarial",
            // },

            {
              title: "Usuarios en Firebase",
              text:
                "Proyecto que muestra el uso de VueJs y Firestorage. Es un proyecto sencillo, tipo CRUD (Create Read Update Delete) con el objetivo de integrar las funciones necesarias para demostrar el uso de VueJs con los servicios de FireStorage.",
              url: "https://github.com/jaalorsa517/users-fire",
              type: "Iniciativa propia"
            },
            {
              title: "Manual Edertiz",
              text:
                "Manual para la aplicación Edertiz. Hecho en Vue.js. Es una página web estática que contiene las instrucciones para descargar, instalar, configurar y utilizar la aplicación Android Edertiz.",
              url: "https://github.com/jaalorsa517/manual_edertiz",
              type: "Proyecto de grados Tecnología en sistemas de información"
            },
            {
              title: "Curriculum personal",
              text:
                "Aplicación web realizada con VUEJS. \nEs una aplicación Progresiva (PWA), por lo que luego de la primera carga, queda cacheada en el navegador para una próxima carga instantánea. \nEs una aplicación realizada desde 0: el análisis, el diseño y ejecución. Es una aplicación muy completa.\nMuestra el uso de componentes, router, propiedades y muchas más funciones que tiene Vue.js",
              url: "https://github.com/jaalorsa517/jaalorsa517.github.io",
              type: "Marca Personal"
            },
            {
              title: "Reto 03",
              text: "Ejemplo de maquetación de una página web",
              url: "https://github.com/jaalorsa517/reto03",
              type: "Proyecto de práctica"
            },
            {
              title: "Platzi vídeo",
              text:
                "Maquetación de página web que simula una plataforma de vídeos.",
              url: "https://github.com/jaalorsa517/platzivideo",
              type: "Proyecto de práctica"
            },
            {
              title: "Platzi movie",
              text:
                "Maquetación de página web que simula una plataforma de películas.",
              url: "https://github.com/jaalorsa517/platzimovie",
              type: "Proyecto de práctica"
            }
          ]
        },
        {
          category: "Python",
          datas: [
            {
              title: "Hospital API",
              text:
                "Una API hecha con Flask y sus extensiones Flask-restful y Flask-httpauth.\nLa API demuestra como funcionaría, en un caso ficticio, el web service de un backend. \nEs una API muy completa, tiene seguridad por autenticación y gestión de roles.",
              url: "https://github.com/jaalorsa517/hospital_api",
              type: "Iniciativa propia"
            },
            {
              title: "Fique API",
              text:
                "Una api hecha con Flask y su extensión Flask-restful.\n La API permite las operaciones básicas del CRUD. También tiene implementada seguridad, gracias a la extensión Flask-httpauth.",
              url: "https://github.com/jaalorsa517/fique_api",
              type: "Empresarial"
            },
            {
              title: "Admin-flask",
              text:
                "Programa hecho en Flask para demostrar el uso de login, con la extensión Flask-login. \n Para ver la demo del programa, visite http://jaalorsa517.pythonanywhere.com/auth/login?next=%2F. \nLas instrucciones de su uso las encuentra en el README del github",
              url: "https://github.com/jaalorsa517/admin-flask",
              type: "Iniciativa Propia"
            },
            {
              title: "Pedidos",
              text:
                "Programa hecho con tkinter para automatizar un proceso del área de markenting de una distribuidoras de lácteos. El programa lee un archivo de *.xlsx y procesa la información para devolver un archivo *.pdf listo para imprimir. \nEste programa está hecho para plataforma de escritorio.",
              url: "https://github.com/jaalorsa517/Pedidos",
              type: "Empresarial"
            },
            {
              title: "Pomodoro",
              text:
                "Programa de escritorio para mejorar la productividad de quién lo use.",
              url: "https://github.com/jaalorsa517/pomodoro",
              type: "Iniciativa Propia"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.exp
  width 80%
  height 80%
  margin auto
  margin-top 100px
  display flex
  justify-content center
  align-items center
  position relative
  background-color rgba(256,256,256,0)

@media screen and (max-width: 767px)
  .exp
    margin-top 200px
    margin-bottom 50px
</style>
