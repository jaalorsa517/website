<template lang="pug">
div
  nav.navegator
    a(
      v-for="(section,i) in sections"
      :key="i" 
      @mouseover="inHover(i)" 
      @mouseleave="outHover(i)" 
      href="#")
        .item-complete(v-show="section.hover") {{section.name}}
        .item(:class="isactive") {{section.init}}
                      
</template>

<script>
export default {
  name: "navi",
  data: function() {
    return {
      sections: [
        { name: "Básica", hover: false, init: 1 },
        { name: "Experiencia", hover: false, init: 2 },
        { name: "Estudios", hover: false, init: 3 },
      ],
      isactive: "",
    };
  },
  methods: {
    inHover: function(i) {
      this.$el.children[0].children[i].children[1].classList.add("active");
      this.sections[i].hover = true;
    },
    outHover: function(i) {
      this.$el.children[0].children[i].children[1].classList.remove("active");
      this.sections[i].hover = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.navegator
  margin 0
  & a
    display flex
    align-items center
    justify-content end
    font-size 2rem
    text-decoration none
    text-align center

.item
    width 48px
    height 48px
    margin 15px
    margin-left 0
    line-height 1.5
    border-radius 50%
    background-color #F5A31A
    transition 0.5s
  &.active
    border-top-left-radius 0
    border-bottom-left-radius 0

.item-complete
  margin 0
  height 48px
  border-top-left-radius 10%
  border-bottom-left-radius 10%
  background-color #F5A31A
  animation-name sliden
  animation-duration 1s
  animation-timing-function ease-in
@keyframes sliden
  0%
    opacity 0%
  100%
    opacity 100%

@media screen and (max-width: 767px)
  .navegator
    & a
      font-size 1rem
  .item
    width 32px
    height 32px
    margin 10px
    margin-left 0
  .item-complete
    height 32px

@media screen and (min-width: 768px) and (max-width: 1280px)
  .navegator
    & a
      font-size 1.5rem
  .item
    width  48px
    height 48px
    margin 10px
    margin-left 0
  .item-complete
    height 48px
</style>
