<script setup>
import { defineAsyncComponent } from "vue";
import JHeader from "@/components/global/JHeader.vue";
import JFooter from "@/components/global/JFooter.vue";

const PromptSW = import.meta.env.PROD
  ? defineAsyncComponent(() => import("@/components/global/PromptSW.vue"))
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
@import "@jaalorsa/j5-components-vue/style.css";

.contentBody {
  min-height: calc(100vh - ($height_fixed * 2));
}
</style>
