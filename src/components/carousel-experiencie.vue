<template lang="pug">
  father(:data-show="dataShow" @info="getInfo")
    a(:href="infoSlide.url" target="_blank")
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
      required: true,
    },
  },
  data: function() {
    return {
      infoSlide: {},
    };
  },
  components: {
    cardDocument,
    father,
  },
  methods: {
    getInfo: function(obj) {
      this.infoSlide = obj;
    },
  },
};
</script>
<style lang="stylus" scoped>
.carousel-container
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  .slides
    flex-grow 5
    a
      text-decoration none
      h4
        font-size 1.3rem
        margin-left 15px
        margin-bottom 5px
        text-shadow 5px 5px 10px rgba(51, 63, 56, 0.1)
</style>
