<template lang="pug">
  div.basic
    //- card-document.card(title="Perfil",text="Soy una persona que me gusta ayudar al que lo necesita, la cualidad que me identifican es la responsabilidad; pero tengo otras que me ayudan a resaltar la cualidad patriarcal: orden, respeto, creativdad y persistencia, todo enfocado de una manera humana. \nMe perfilo al desarrollo web con python como backend y JavaScript en Vue como fronted. También me oriento, en menor medida, al desarrollo móvil con Flutter y desarrollos de escritorio con Java. ")
    card-progress
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
  height calc(100vh - 300px)
  display flex
  // background-color #f3d8a6
.card
  margin 30px
</style>
