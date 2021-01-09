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
              title: "Basico",
              text: "Esto es una prueba de lo que va a pasar",
              url: "#",
            },
            {
              title: "Basico1",
              text: "Esto es una prueba de lo que va a pasar",
              url: "#",
            },
            {
              title: "Basico2",
              text: "Esto es una prueba de lo que va a pasar",
              url: "#",
            },
          ],
        },
        {
          category: "Web",
          datas: [
            {
              title: "Basico3",
              text: "Esto es una prueba de lo que va a pasar",
              url: "#",
            },
            {
              title: "Basico4",
              text: "Esto es una prueba de lo que va a pasar",
              url: "#",
            },
            {
              title: "Basico5",
              text: "Esto es una prueba de lo que va a pasar",
              url: "#",
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
  margin-top 200px
  display flex
  justify-content center
  align-items center
  position relative
  background-color rgba(256,256,256,0)
</style>
