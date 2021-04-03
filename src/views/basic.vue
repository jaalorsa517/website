<template lang="pug">
  div.basic
    card-document.card(
      title="Perfil"
      text="Soy una persona que me gusta ayudar al que lo necesita, la cualidad que me identifican es la responsabilidad; pero tengo otras que me ayudan a resaltar la cualidad patriarcal: orden, respeto, creatividad y persistencia, todo enfocado de una manera humana. \nMe perfilo al desarrollo web con python como backend y JavaScript en Vue como fronted. También me oriento, en menor medida, al desarrollo móvil con Flutter y desarrollos de escritorio con Java. "
      v-animate-css="animations.ZoomIn"
      v-animate-css.hover="animations.Pulse"
      )
    card-progress.card(v-animate-css="animations.ZoomIn")
</template>

<script>
import cardDocument from "../components/card-document";
import cardProgress from "../components/card-progress";

export default {
  name: "basic",
  components: {
    cardDocument,
    cardProgress
  },
  data: function() {
    return {
      animations: {
        Pulse: {
          classes: "pulse",
		  delay:100,
          iteration: 1
        },
        ZoomIn: {
          classes: "zoomIn",
          delay: 200
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.basic
  width 80%
  height 100%
  margin auto
  display flex
  justify-content center
  align-items center
  background-color rgba(256,256,256,0)

.card
  margin 30px
  flex 1

@media screen and  (max-width: 767px)
  .basic
    flex-direction column
    margin-top 225px
    margin-bottom 125px

@media screen and (min-width: 768px) and (max-width: 1280px)
  .basic
    flex-direction column
    margin-top 200px
    margin-bottom 100px
</style>
