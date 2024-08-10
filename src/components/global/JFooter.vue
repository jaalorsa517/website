<script setup lang="ts">
import { J5VIcons } from "@jaalorsa/j5-components-vue";
import { selectContent } from "@/shared/services/ga.services";
import { ANALYTICS } from "@/shared/const";

const icons = [
  { name: "youtube", link: "https://www.youtube.com/@jaalorsa" },
  { name: "github", link: "https://github.com/jaalorsa517" },
  { name: "facebook", link: "https://www.facebook.com/jaime.ortizsaldarriaga/" },
  { name: "x", link: "https://x.com/jaalorsa517" },
  { name: "linkedin", link: "https://www.linkedin.com/in/jaalorsa" },
  { name: "gmail", link: "mailto:jaalorsa519@gmail.com" },
];
function onClick(name) {
  selectContent(ANALYTICS.ORIGIN_CONTACTS, name);
}
</script>
<template>
  <footer class="footer">
    <a class="footer__link" :href="icon.link" target="_blank" v-for="(icon, key) in icons" :key="key"
      @click="onClick(icon.name)">
      <J5VIcons class="footer__icon" :name="icon.name"></J5VIcons>
    </a>
  </footer>
</template>
<style lang="scss">
.footer {
  @include Flex(row, center);
  height: $height_fixed;
  width: 100%;
  padding: 0.5em 0.8em;

  &__icon {
    margin: 0 0.5rem;
    font-size: 2em;
  }
}
</style>
