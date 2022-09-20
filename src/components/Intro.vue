<script setup>
import JAvatar from "@/components/JAvatar.vue";
const url = "https://i.ibb.co/n020sh2/Perfil2.jpg";
</script>
<template>
  <section class="intro">
    <JAvatar class="intro__avatar" :url="url"></JAvatar>
  </section>
</template>
<style lang="scss">
.intro {
  &__avatar {
    width: 15em;
    height: 15em;
  }
}
</style>
