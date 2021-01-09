<template lang="pug">
  .carousel-container
    .slides
      .slide
        a(:href="infoSlide.url" target="_blank")
          h4 {{infoSlide.type}}
          card-document(:title="infoSlide.title" :text="infoSlide.text")
    .controlls
      button.left(@click="toPrevSlide" class="btn") 
        img(:src="leftIcon")
      .circles-container
        .circle(v-for="i in dataSlide.length" :class="`circle--${i} `")
      button.right(@click="toNextSlide" class="btn")
        img(:src="rigthIcon")
    .thumbnails-container
      button.leftThumbnail(@click="toPrevThumb" class="btn") 
        img(:src="leftIcon")
      .thumbnails
        .thumbnail(v-for="t, index in dataShow" :key="index" :class="`t--${index}`")
          h5 {{t.category}}
      button.rightThumbnail(@click="toNextThumb" class="btn") 
        img(:src="rigthIcon")

</template>
<script>
import cardDocument from "../components/card-document";
import leftIcon from "../assets/arrow-left.png";
import rigthIcon from "../assets/arrow-rigth.png";

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
      leftIcon,
      rigthIcon,
    };
  },
  components: {
    cardDocument,
  },
  computed: {
    dataSlide: function() {
      return this.dataShow[this.currentThumbnails].datas;
    },
    infoSlide: function() {
      return this.dataSlide[this.currentSlide];
    },
  },
  methods: {
    currentCircle: function(n, o) {
      this.$el.children[1].children[1].children[o].classList.remove("current");
      this.$el.children[1].children[1].children[n].classList.add("current");
    },
    toNextSlide: function() {
      let old = this.currentSlide;
      if (this.currentSlide < this.dataSlide.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.currentCircle(this.currentSlide, old);
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
  mounted: function() {
    this.$el.children[1].children[1].children[this.currentSlide].classList.add(
      "current"
    );
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
    // .slide
    //   transition 1s ease-in
    a
      text-decoration none
      h4
        font-size 1.3rem
        margin-left 15px
        margin-bottom 5px
        text-shadow 5px 5px 10px rgba(51, 63, 56, 0.1)
  .controlls
    flex-grow 1
    display flex
    margin 10px auto
  .circles-container
    display flex
    justify-content center
    align-items center
  .circle
    width 16px
    height 16px
    margin 0 10px
    background-color rgba(51, 63, 56, 0.4)
    border-radius 50%
    &.current
      // background-color rgba(51, 63, 56, 1)
      background-color #F5A31A
  .thumbnails-container
    flex-grow 1
    display:flex
    align-items center
    margin 10px auto
  .thumbnails
    display flex
  .thumbnail
    width  128px
    height 128px
    margin 0 10px
    display flex
    justify-content center
    align-items center
    text-align center
    border-radius 5px
    background-color rgba(245,163,26,1)
    h5
      font-weight 700
      font-size 1.3rem
      text-shadow 5px 5px 10px rgba(51, 63, 56, 0.3)
  .btn
    max-width 64px
    max-height 64px
    background-color transparent
    border-radius 5px
    border-style outset
    border none
    img
      max-width 32px
      max-height 32px
    &:hover
      background-color #EDF4F2
      box-shadow 5px 5px 10px rgba(51, 63, 56, 0.3)
</style>
