<template lang="pug">
  div.container-progress(
    v-animate-css.hover="animations.Pulse"
  )
    h3 Habilidades
    .skills(v-for="skill in skills" :key="skill.title") 
      span.title {{skill.title}}
      k-progress.skill(:percent="skill.value" :color="skill.color")
</template>

<script>
//https://vuejsexamples.com/a-vue-linear-progress-bar/
import KProgress from "k-progress";

export default {
  name: "card-progress",
  components: {
    "k-progress": KProgress
  },
  data: function() {
    return {
      skills: [
        {
          title: "SCRUM",
          value: 50,
          color: "green"
        },
        {
          title: "Terminal Linux",
          value: 85,
          color: "blue"
        },
        {
          title: "SQL",
          value: 80,
          color: "yellow"
        },
        {
          title: "Git",
          value: 75,
          color: "purple"
        },
        {
          title: "Docker",
          value: 80,
          color: "red"
        },
        {
          title: "POO",
          value: 100,
          color: "pink"
        },
        {
          title: "Expresiones regulares",
          value: 50,
          color: "orange"
        }
      ],
      animations: {
        Pulse: {
          classes: "pulse",
          delay:100,
          iteration: 1
        },
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.container-progress
  padding 15px
  border-top 5px solid #D32626
  border-radius 5px
  border-bottom-left-radius 15px
  border-bottom-right-radius 15px
  box-shadow 5px 5px 10px rgba(51, 63, 56, 0.5)
  background-color #EDF4F2
h3
  margin 10px
  font-size 2rem
  text-shadow 5px 5px 10px rgba(51, 63, 56, 0.3)
.skills
  display flex
  font-size 1.1rem
  & .title
      margin 0 10px
      width 20%
      text-shadow 5px 5px 10px rgba(51, 63, 56, 0.3)
.skill
  min-width 350px
  flex 2

@media screen and  (max-width: 767px)
  .container-progress
    margin 0 20px
    min-width 40vh
  h3
    font-size 1rem
  .skills
    font-size 0.7rem
  .skill
    min-width auto
</style>
