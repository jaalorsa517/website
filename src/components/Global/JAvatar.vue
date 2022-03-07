<script setup>
import Iconic from "@/components/Global/JIconic/JIconic.vue";
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
    <img class="avatar__img" :src="url" alt="user" v-if="url" v-show="isLoaded" @load="isLoaded = true" />
    <Iconic class="avatar__ico" name="userSkeleton" v-if="isShow" />
  </div>
</template>
<style lang="scss">
.avatar {
  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    animation: fadeIn 0.8s ease-in-out;
  }
  &__ico {
    color: transparent;
  }
}
</style>
