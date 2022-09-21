<script setup>
import { transformText } from "@/services/transformText.service";
import { Intro } from "@/assets/resources/index";
import { computed } from "vue";
import JAvatar from "@/components/global/JAvatar.vue";

const title = computed(() => Intro.title);
const description = computed(() => Intro.body);
</script>
<template>
  <section class="intro">
    <div class="intro__container">
      <JAvatar class="intro__avatar" :url="Intro.urlPerfil"></JAvatar>
      <h1 class="intro__title">{{ title }}</h1>
    </div>
    <div class="intro__container intro__container--description">{{ description }}</div>
  </section>
</template>
<style lang="scss">
.intro {
  padding: 1.5em 0;
  &__container {
    @include Flex(column, center, center);
    padding: 0 0.5em;
    &--description {
      padding: 0 1.5em;
    }
  }
  &__title {
    text-align: center;
    white-space: pre;
  }
  &__avatar {
    width: 8em;
    height: 8em;
  }
  @include pocketWidth() {
    &__container {
      @include Flex(row, center, flex-start);
      padding: 0.5em 1em;
    }
    &__avatar {
      width: 7em;
      height: 7em;
      margin: 0 1em;
    }
  }
}
</style>
