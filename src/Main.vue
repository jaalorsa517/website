<script setup>
import { defineAsyncComponent } from "vue";
import { MODE_PROD } from "@/shared/const";
import JHeader from "@/components/global/JHeader.vue";
import JFooter from "@/components/global/JFooter.vue";

const PromptSW =
  import.meta.env.VITE_MODE === MODE_PROD
    ? defineAsyncComponent(() => "@/components/global/PromptSW.vue")
    : null;
</script>
<template>
  <main class="main">
    <JHeader />
    <router-view class="contentBody"></router-view>
    <JFooter />
  </main>
  <PromptSW v-if="PromptSW" />
</template>
<style lang="scss">
.contentBody {
  min-height: calc(100vh - ($height_fixed * 2));
}
</style>
