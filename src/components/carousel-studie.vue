<template lang="pug">
  father(:dataShow="dataShow" @info="getInfo")
    .card-img
      img(:src="infoSlide.img")
      h4 {{infoSlide.title}}
      h5 {{infoSlide.year}}
      h4 {{infoSlide.institute}}

</template>
<script>
import father from "../components/carousel-father";

export default {
  name: "carousel-complex",
  props: {
    dataShow: {
      type: Array,
      required: true,
    },
  },
  components: {
    father,
  },
  data: function() {
    return {
      infoSlide: {},
    };
  },
  methods: {
    getInfo: function(obj) {
      this.infoSlide = obj;
    },
  },
};
</script>
<style lang="stylus" scoped>
flex()
  display flex
  flex-direction column
  justify-content center
  align-items center

.carousel-container
  width 100%
  flex()
  .slides
    flex-grow 5
    & .card-img
      flex()
      & img
        max-width 350px
        max-height 250px
      & h4
        text-align center
        font-size 1.3rem
      & h5
        text-align center
        font-size 1.1rem
@media screen and  (max-width: 767px)
  .carousel-container
    .slides
      & .card-img
        & img
          max-width 250px
          max-height 150px
</style>
