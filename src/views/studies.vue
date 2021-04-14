<template lang="pug">
	.stu
		carousel-std(:data-show="info")
</template>
<script>
import carouselStd from "../components/carousel-studie";
import titulo from "../assets/images/certificados/tecnico_sistemas.png";
import scrum from "../assets/images/certificados/scrum.png";
import terminal from "../assets/images/certificados/linea-comandos.png";
import sql from "../assets/images/certificados/sql-mysql.png";
import postgres from "../assets/images/certificados/postgres.png";
import git from "../assets/images/certificados/git.png";
import docker from "../assets/images/certificados/docker.png";
import poo from "../assets/images/certificados/poo.png";
import regex from "../assets/images/certificados/expresiones-regulares.png";
import python from "../assets/images/certificados/python.png";
import pythonCrud from "../assets/images/certificados/python-crud.png";
import flask from "../assets/images/certificados/flask.png";
import django from "../assets/images/certificados/django.png";
import vuejs from "../assets/images/certificados/fronted_vue.png";
import html from "../assets/images/certificados/html-css.png";
import responsive from "../assets/images/certificados/responsive.png";
import js from "../assets/images/certificados/profesional-js.png";
import web from "../assets/images/certificados/desarrollo-web.png";
import precss from "../assets/images/certificados/preprocesador-css.png";
import animacion from "../assets/images/certificados/animacion-web.png";
import typescript from "../assets/images/certificados/typescript.png";
import react from "../assets/images/certificados/react.png";

export default {
  name: "studies",
  components: {
    carouselStd
  },
  data: function() {
    return {
      info: [
        {
          category: "Habilidades",
          datas: [
            {
              img: titulo,
              title: "Técnico en sistemas",
              year: "2.009",
              institute: "Remington"
            },
            {
              img: scrum,
              title: "SCRUM",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: terminal,
              title: "Terminal y línea de comandos",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: sql,
              title: "SQL y MYSQL",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: postgres,
              title: "Postgresql",
              year: "Diciembre 2.020",
              institute: "Platzi"
            },
            {
              img: git,
              title: "Git y github",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: docker,
              title: "Fundamentos de Docker",
              year: "Agosto 2.020",
              institute: "Platzi"
            },
            {
              img: poo,
              title: "Programación orientada a objetos",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: regex,

              title: "Expresiones regulares",
              year: "Junio 2.020",
              institute: "Platzi"
            }
          ]
        },
        {
          category: "Web",
          datas: [
            {
              img: vuejs,
              title: "Desarrollo con VueJs",
              year: "Marzo 2.021",
              institute: "Platzi"
            },
            {
              img: react,
              title: "React.js",
              year: "Marzo 2.021",
              institute: "Platzi"
            },
            {
              img: typescript,
              title: "Fundamentos de Typescript",
              year: "Febrero 2.021",
              institute: "Platzi"
            },
            {
              img: html,
              title: "HTML y CSS",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: responsive,
              title: "Responsive Design",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: js,
              title: "Profesional en JavaScript",
              year: "Agosto 2.020",
              institute: "Platzi"
            },
            {
              img: web,
              title: "Desarrollo web online",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: precss,
              title: "Preprocesador CSS",
              year: "Septiembre 2.020",
              institute: "Platzi"
            },
            {
              img: animacion,
              title: "Animación para web",
              year: "Diciembre 2.020",
              institute: "Platzi"
            }
          ]
        },
        {
          category: "Python",
          datas: [
            {
              img: python,
              title: "Python",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: pythonCrud,
              title: "Python: Creación de un CRUD",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: flask,
              title: "Flask",
              year: "Julio 2.020",
              institute: "Platzi"
            },
            {
              img: django,
              title: "Django",
              year: "Agosto 2.020",
              institute: "Platzi"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.stu
  width 80%
  height 80%
  margin auto
  margin-top 125px
  display flex
  justify-content center
  align-items center
  position relative
  background-color rgba(256,256,256,0)
@media screen and (max-width: 767px)
  .stu
    margin-top 200px
    margin-bottom 50px
</style>
