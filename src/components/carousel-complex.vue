<template lang="pug">
  .carousel-container
    .slides
      .slide
        card-document(:title="dataSlide[currentSlide].title" :text="dataSlide[currentSlide].text")
    .controlls
      button.left(@click="toPrevSlide") <
      .circles-container(v-for="i in dataSlide.length")
        div(:class="`circle circle--${i}`")
      button.right(@click="toNextSlide") >
    .thumbnails-container
      button.leftThumbnail(@click="toPrevThumb") <
      .thumbnails
        .thumbnail(v-for="t, index in dataShow" :key="index" :class="`t--${index}`")
          h5 {{t.category}}
      button.rightThumbnail(@click="toNextThumb") >

</template>
<script>
import cardDocument from "../components/card-document";

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
      currentSlide: 0,
      currentThumbnails: 0,
    };
  },
  components: {
    cardDocument,
  },
  computed: {
    dataSlide: function() {
      return this.dataShow[this.currentThumbnails].datas;
    },
  },
  methods: {
    toNextSlide: function() {
      if (this.currentSlide < this.dataSlide.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    toPrevSlide: function() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.dataSlide.length - 1;
      }
    },
    toNextThumb: function() {
      if (this.currentThumbnails < this.dataShow.length - 1) {
        this.currentThumbnails++;
      } else {
        this.currentThumbnails = 0;
      }
      this.currentSlide = 0;
    },
    toPrevThumb: function() {
      if (this.currentThumbnails > 0) {
        this.currentThumbnails--;
      } else {
        this.currentThumbnails = this.dataShow.length - 1;
      }
      this.currentSlide = 0;
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
  .controlls
    flex-grow 1
    display flex
  .circles-container
    display flex
  .circle
    width 16px
    height 16px
    background-color #f3f3f3
    border-radius 50%
  .thumbnails-container
    display:flex
  .thumbnail
    display: flex
</style>
