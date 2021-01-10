<template lang="pug">
  .exp
    carousel(:dataShow="info")
</template>

<script>
import carousel from "../components/carousel-complex";

export default {
  name: "experiencie",
  components: {
    carousel,
  },
  data: function() {
    return {
      info: [
        {
          category: "Python",
          datas: [
            {
              title: "Fique API",
              text:
                "Una api hecha con Flask y su extensión Flask-restful.\n La API permite las operaciones básicas del CRUD. También tiene implementada seguridad, gracias a la extensión Flask-httpauth.",
              url: "https://github.com/jaalorsa517/fique_app",
              type: "Empresarial",
            },
            {
              title: "Admin-flask",
              text:
                "Programa hecho en Flask para demostrar el uso de login, con la extensión Flask-login. \n Para ver la demo del programa, visite http://jaalorsa517.pythonanywhere.com/auth/login?next=%2F. \nLas instrucciones de su uso las encuentra en el README del github",
              url: "https://github.com/jaalorsa517/admin-flask",
              type: "Iniciativa Propia",
            },
            {
              title: "Pedidos",
              text:
                "Programa hecho con tkinter para automatizar un proceso del área de markenting de una distribuidoras de lácteos. El programa lee un archivo de *.xlsx y procesa la información para devolver un archivo *.pdf listo para imprimir.",
              url: "https://github.com/jaalorsa517/Pedidos",
              type: "Empresarial",
            },
            {
              title: "Pomodoro",
              text:
                "Programa de escritorio para mejorar la productividad de quién lo use.",
              url: "https://github.com/jaalorsa517/pomodoro",
              type: "Iniciativa Propia",
            },
          ],
        },
        {
          category: "Web",
          datas: [
            {
              title: "algo",
              text: "",
              url: "",
              type: "",
            },
          ],
        },
      ],
    };
  },
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
