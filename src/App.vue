<template lang="pug">
  .app
    header-custom
    navigator-custom
    footer-custom
</template>

<script>
import headerCustom from "./components/header-custom";
import footerCustom from "./components/footer-custom";
import navigatorCustom from "./components/navigator-custom";

export default {
  name: "Curriculum",
  components: {
    headerCustom,
    navigatorCustom,
    footerCustom,
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
  fonts()

a
  fonts()
</style>
