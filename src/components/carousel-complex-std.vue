<template lang="pug">
  .carousel-container
    .slides
      .card-img
        img(:src="infoSlide.img")
        h4 {{infoSlide.title}}
        h5 {{infoSlide.year}}
        h4 {{infoSlide.institute}}
    .controlls
      button.left(@click="toPrevSlide" class="btn") 
        img(:src="leftIcon")
      .circles-container
        .circle(v-for="i in dataSlide.length" :class="`circle--${i} `" @click="goToSlide(i-1)")
      button.right(@click="toNextSlide" class="btn")
        img(:src="rigthIcon")
    .thumbnails-container
      button.leftThumbnail(@click="toPrevThumb" class="btn") 
        img(:src="leftIcon")
      .thumbnails
        .thumbnail(v-for="t, index in dataShow" :key="index" :class="`t--${index}`" @click="goToThumbnail(index)")
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
    currentThumbnail: function(n, o) {
      this.$el.children[2].children[1].children[o].classList.remove("current");
      this.$el.children[2].children[1].children[n].classList.add("current");
    },
    toNextSlide: function() {
      let old = this.currentSlide;
      ("../assets/images/certificados/animacion-web.png");
      if (this.currentSlide < this.dataSlide.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.currentCircle(this.currentSlide, old);
    },
    toPrevSlide: function() {
      let old = this.currentSlide;
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.dataSlide.length - 1;
      }
      this.currentCircle(this.currentSlide, old);
    },
    goToSlide: function(i) {
      this.currentCircle(i, this.currentSlide);
      this.currentSlide = i;
    },
    toNextThumb: function() {
      let old = this.currentThumbnails;
      if (this.currentThumbnails < this.dataShow.length - 1) {
        this.currentThumbnails++;
      } else {
        this.currentThumbnails = 0;
      }
      this.currentCircle(0, this.currentSlide);
      this.currentSlide = 0;
      this.currentThumbnail(this.currentThumbnails, old);
    },
    toPrevThumb: function() {
      let old = this.currentThumbnails;
      if (this.currentThumbnails > 0) {
        this.currentThumbnails--;
      } else {
        this.currentThumbnails = this.dataShow.length - 1;
      }
      this.currentCircle(0, this.currentSlide);
      this.currentSlide = 0;
      this.currentThumbnail(this.currentThumbnails, old);
    },
    goToThumbnail: function(i) {
      this.currentThumbnail(i, this.currentThumbnails);
      this.currentThumbnails = i;
      this.currentCircle(0, this.currentSlide);
      this.currentSlide = 0;
    },
  },
  mounted: function() {
    this.$el.children[1].children[1].children[this.currentSlide].classList.add(
      "current"
    );
    this.$el.children[2].children[1].children[
      this.currentThumbnails
    ].classList.add("current");
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
    & .card-img
      display flex
      flex-direction column
      justify-content center
      align-items center
      & img
        max-width 350px
        max-height 250px
      & h4
        text-align center
        font-size 1.3rem
      & h5
        text-align center
        font-size 1.1rem
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
    border-radius 50%
    background-color #F5A31A
    &:hover
      cursor pointer
    &.current
      background-color #D32626
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
    background-color #F5A31A
    &:hover
      cursor pointer
    &.current
      background-color #D32626
      h5
        color #EDF4F2
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
      cursor pointer
@media screen and  (max-width: 767px)
  .carousel-container
    .slides
      & .card-img
        & img
          max-width 250px
          max-height 150px
    .circle
      width  8px
      height 8px
      margin 0 2px
    .thumbnail
      width  64px
      height 64px
      h5
        font-size 0.8rem
        overflow hidden
        text-overflow ellipsis
    .btn
      max-width 32px
      max-height 32px
      img
        max-width  16px
        max-height 16px
</style>
