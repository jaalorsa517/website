<template lang="pug">
  div.basic
    card-document.card(title="Perfil",text="Soy una persona que me gusta ayudar al que lo necesita, la cualidad que me identifican es la responsabilidad; pero tengo otras que me ayudan a resaltar la cualidad patriarcal: orden, respeto, creativdad y persistencia, todo enfocado de una manera humana. \nMe perfilo al desarrollo web con python como backend y JavaScript en Vue como fronted. También me oriento, en menor medida, al desarrollo móvil con Flutter y desarrollos de escritorio con Java. ")
    card-progress.card
</template>

<script>
import cardDocument from "../components/card-document";
import cardProgress from "../components/card-progress";

export default {
  name: "basic",
  components: {
    cardDocument,
    cardProgress,
  },
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
    margin-top 200px
    margin-bottom 100px

@media screen and (min-width: 768px) and (max-width: 1280px)
  .basic
    flex-direction column
    margin-top 200px
    margin-bottom 100px
</style>
