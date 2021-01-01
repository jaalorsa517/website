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
                .item(:class="isactive")
                        
</template>

<script>
export default {
  name: "navigator",
  data: function() {
    return {
      sections: [
        { name: "Básica", hover: false },
        { name: "Experiencia", hover: false },
        { name: "Estudios", hover: false },
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
    position fixed
    right 0
    top 200px
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
    border-radius 50%
    background-color #F5A31A
    transition 0.5s
  &.active
    border-top-left-radius 0
    border-bottom-left-radius 0

.item-complete
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
</style>
