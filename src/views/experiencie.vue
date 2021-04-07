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
          category: "Python",
          datas: [
            {
              title: "Hospital API",
              text:
                "Una API hecha con Flask y sus extensiones Flask-restful y Flask-httpauth.\nLa API demuestra como funcionaría, en un caso ficticio, el web service de un backend.",
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
                "Programa hecho con tkinter para automatizar un proceso del área de markenting de una distribuidoras de lácteos. El programa lee un archivo de *.xlsx y procesa la información para devolver un archivo *.pdf listo para imprimir.",
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
        },
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
              title: "Manual Edertiz",
              text: "Manual para la aplicación Edertiz. Hecho con Vue.js. Esta página pretende demostrar una maquetación sencilla.",
              url: "https://github.com/jaalorsa517/manual_edertiz",
              type: "Proyecto de Tecnología"
            },
            {
              title: "Curriculum",
              text: "Aplicación web realizada con VUE",
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
