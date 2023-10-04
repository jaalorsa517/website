<script setup>
import { ref, computed } from "vue";
import { J5VIcons } from "@jaalorsa/j5-components-vue"

const { url } = defineProps({ url: String });
const isLoaded = ref(false);
const isShow = computed(() => {
  if (!url) return true;
  if (!isLoaded.value) return true;
  return false;
});
</script>
<template>
  <div class="avatar">
    <div class="avatar__borderExternal"></div>
    <div class="avatar__borderIntermedie"></div>
    <div class="avatar__borderIntern"></div>
    <img class="avatar__img" :src="url" alt="user" v-if="url" v-show="isLoaded" @load="isLoaded = true" />
    <J5VIcons class="avatar__ico" name="userSkeleton" v-if="isShow" />
  </div>
</template>
<style lang="scss">
.avatar {
  $size_img: 80%;
  $border_intern: 88%;
  $border_intermedie: 95%;
  $border_external: 103%;
  $pos_border_interne: 6%;
  @include Flex(row, center);
  position: relative;

  &__img {
    width: $size_img;
    height: $size_img;
    border-radius: 50%;
    object-fit: cover;
    animation: fadeIn 0.8s ease-in-out;
  }

  &__ico {
    color: var(--color-gray) _dark;
    position: relative;
    top: -4px;
  }

  &__borderExternal,
  &__borderIntermedie,
  &__borderIntern {
    position: absolute;
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    z-index: 10;
    animation: 1.8s ease-in-out forwards;
  }

  &__borderExternal {
    width: $border_external;
    height: $border_external;
    border-color: var(--color-gray) _light;
    border-right-color: transparent;
    animation-name: turnsTo-30;
  }

  &__borderIntermedie {
    width: $border_intermedie;
    height: $border_intermedie;
    border-color: var(--color-second);
    border-right-color: transparent;
    animation-name: turnsTo65;
  }

  &__borderIntern {
    width: $border_intern;
    height: $border_intern;
    top: $pos_border_interne;
    left: $pos_border_interne;
    border-color: var(--color-primary);
    border-left-color: transparent;
    animation-name: turnsTo45;
  }
}</style>
