<template lang="pug">
    div
        nav.navegator
            a(
                v-for="i in [0,1,2]"
                :key="i" 
                @mouseover="hover = true" 
                @mouseleave="hover = false" 
                href="#")
                span
                    .item
                    .item-complete(v-if="hover") {{sections[i]}}
                        
</template>

<script>
export default {
  name: "navigator",
  data: function() {
    return {
      hover: false,
      sections: ["Básica", "Experiencia", "Estudios"],
    };
  },
};
</script>

<style lang="stylus" scoped>
.navegator
    position fixed
    right 0
    top 200px
.item
    width 48px
    height 48px
    margin 15px
    border-radius 50%
    background-color #F5A31A
.item-complete
    background-color #F5A31A
    height 48px
</style>
