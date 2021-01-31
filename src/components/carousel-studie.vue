<template lang="pug">
  father(:dataShow="dataShow" @info="getInfo")
    transition(name="slider")
      .card-img(v-show="anime")
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
      anime: true,
    };
  },
  methods: {
    getInfo: function(obj) {
      this.anime = false;
      this.infoSlide = obj;
      setTimeout(
        function() {
          this.anime = true;
        }.bind(this),
        500
      );
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

.slider-enter-active, .slider-leave-active
  transition: transform  0.5s

.slider-enter, .slider-leave-to
  transform: scale(0.7)

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
@media screen and (min-width: 768px) and (max-width: 1440px)
	.carousel-container
    .slides
      & .card-img
        & h4
          font-size 1rem
</style>
