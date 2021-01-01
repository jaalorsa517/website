<template lang="pug">
  .app
    header-custom
</template>

<script>
import headerCustom from "./components/header";
import footerCustom from "./components/footer";

export default {
  name: "Curriculum",
  components: {
    headerCustom,
    footerCustom,
  },
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Glegoo:wght@400;700&display=swap')
.app
  height 100vh
  width 100%
  font-family 'Glegoo', serif
  font-size 12px
  color #333F38
</style>
