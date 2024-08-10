<script setup lang="ts">
import { computed } from "vue";
import { ViewHome } from "@/assets/resources/language/index";
import JAvatar from "@/components/global/JAvatar.vue";

const title = computed(() => ViewHome.intro.title);
const description = computed(() => ViewHome.intro.body);
// const txtBtn = computed(() => ViewHome.intro.btnKwonMore);
</script>
<template>
  <section class="intro">
    <div class="intro__container">
      <JAvatar class="intro__avatar" :url="ViewHome.intro.urlPerfil"></JAvatar>
      <h1 class="intro__title">{{ title }}</h1>
    </div>
    <div class="intro__container">
      <p class="intro__description" v-html="description"></p>
    </div>
    <!-- <div class="intro__container">
      <RouterLink class="intro__btn button" to="/about">{{ txtBtn }}</RouterLink>
    </div> -->
  </section>
</template>
<style lang="scss">
.intro {
  padding: $padding_sections;
  &__container {
    @include Flex(column, center, center);
    padding: 0.5em;
  }
  &__description {
    padding: 0 1.5em;
  }
  &__title,
  &__description,
  &__btn {
    user-select: none;
    animation: 1.5s ease-in-out;
  }
  &__title {
    text-align: center;
    line-height: 1.2;
    white-space: pre;
    animation-name: fadeIn;
  }
  &__btn,
  &__description {
    animation-name: fadeInUp;
  }
  & &__btn {
    color: var(--color-white);
    &:hover {
      color: var(--color-third);
    }
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
