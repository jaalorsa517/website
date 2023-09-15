<script setup>
import JIconic from "@/components/global/JIconic/JIconic.vue";
import { selectContent } from "@/services/ga.services";
import { ANALYTICS } from "@/shared/const";

const icons = [
  { name: "youtube", link: "https://www.youtube.com/channel/UC2629Jqdc0PQCYRxmF3fcZA" },
  { name: "github", link: "https://github.com/jaalorsa517" },
  { name: "facebook", link: "https://www.facebook.com/jaime.ortizsaldarriaga/" },
  { name: "x", link: "https://twitter.com/jaalorsa517" },
  { name: "linkedin", link: "https://www.linkedin.com/in/jaime-alberto-ortiz-saldarriaga-54a3409b" },
  { name: "gmail", link: "mailto:jaalorsa519@gmail.com" },
];
function onClick(name) {
  selectContent(ANALYTICS.ORIGIN_CONTACTS, name);
}
</script>
<template>
  <footer class="footer">
    <a
      class="footer__link"
      :href="icon.link"
      target="_blank"
      v-for="(icon, key) in icons"
      :key="key"
      @click="onClick(icon.name)"
    >
      <JIconic class="footer__icon" :name="icon.name"></JIconic>
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
