<template lang="pug">
  .app
    headi.header
    router-view.body
    navi.navi
    foot.footer
</template>

<script>
import headi from "./components/headi";
import foot from "./components/foot";
import navi from "./components/navi";

export default {
  name: "Curriculum",
  components: {
    headi,
    navi,
    foot,
  },
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Glegoo:wght@400;700&display=swap')

fonts()
  font-family 'Glegoo', serif
  font-size 12px
  color #333F38

*
  margin 0

.app
  height 100vh
  width 100%
  min-height 600px
  position relative
  fonts()

a
  fonts()
.header
  z-index 3
.body
  z-index 2
.navi
  position fixed
  top 40%
  right 0
  z-index 5

.footer
  position relative
  bottom 0
  z-index 3
</style>
