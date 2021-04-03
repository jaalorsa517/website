<template lang="pug">
  father(
    :data-show="dataShow" 
    @info="getInfo"
    )
    transition(name="slider")
      a(
        :href="infoSlide.url" 
        target="_blank" 
        v-show="anime" 
        )
        h4 {{infoSlide.type}}
        card-document(:title="infoSlide.title" :text="infoSlide.text")
</template>
<script>
import cardDocument from "../components/card-document";
import father from "../components/carousel-father";

export default {
  name: "carousel-complex",
  props: {
    dataShow: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      infoSlide: {},
      anime: false,
    };
  },
  components: {
    cardDocument,
    father
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
    }
  }
};
</script>
<style lang="stylus" scoped>
.slider-enter-active, .slider-leave-active
  transition transform 0.5s

.slider-enter, .slider-leave-to
  transform scale(1.1)

.carousel-container
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  .slides
    flex-grow 5
    a
      display flex
      flex-direction column
      text-decoration none
      h4
        font-size 1.3rem
        margin-left 15px
        margin-bottom 5px
        text-shadow 5px 5px 10px rgba(51, 63, 56, 0.1)
</style>
