<template lang="pug">
  #app(:style="background=cssProps")
    headi.headi
    router-view.body
    navi.navi
    foot.foot
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
  data: function() {
    return {
      cssProps: {
        backgroundImage: `url(${require("./assets/images/fondo.png")})`,
      },
    };
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

#app
  width 100%
  height 100vh
  position relative
  background-repeat repeat
  overflow auto
  fonts()

a,h1,h2,h3,h4,h5,h6
  fonts()

.headi
  z-index 3

.body
  z-index 2
  background-color #EDF4F2

.navi
  position fixed
  top 40vh
  right 0
  z-index 5

.foot
  position fixed
  bottom 0
  z-index 3
</style>
