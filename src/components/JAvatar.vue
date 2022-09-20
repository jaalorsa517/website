<script setup>
import Iconic from "@/components/JIconic/JIconic.vue";
import { ref, computed } from "vue";

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
    <Iconic class="avatar__ico" name="userSkeleton" v-if="isShow" />
  </div>
</template>
<style lang="scss">
.avatar {
  @include Flex(row, center);
  position: relative;
  &__img {
    width: 77.5%;
    height: 77.5%;
    border-radius: 50%;
    object-fit: cover;
    animation: fadeIn 0.8s ease-in-out;
  }
  &__ico {
    color: $color_font_dark;
    position: relative;
    top: -10px;
  }
  &__borderExternal,
  &__borderIntermedie,
  &__borderIntern {
    position: absolute;
    border-radius: 100%;
    border-width: 2.5px;
    border-style: solid;
    z-index: 10;
  }
  &__borderExternal {
    width: 100%;
    height: 100%;
    border-color: $color_gray_light;
    border-right-color: transparent;
    transform: rotate(-30deg);
  }
  &__borderIntermedie {
    width: 92.5%;
    height: 92.5%;
    border-color: $color_third_color;
    border-right-color: transparent;
    transform: rotate(65deg);
  }
  &__borderIntern {
    width: 85%;
    height: 85%;
    top: 8%;
    left: 8%;
    border-color: $color_sec_color;
    border-left-color: transparent;
    transform: rotate(45deg);
  }
}
</style>
