<script setup lang="ts">
import { defineAsyncComponent, inject } from "vue";
import JHeader from "@/components/global/JHeader.vue";
import JFooter from "@/components/global/JFooter.vue";
import { IsProdInject } from "@/shared/constants/injectsKey";

const isProd = inject<boolean>(IsProdInject)

const PromptSW = isProd
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
.contentBody {
  min-height: calc(100vh - ($height_fixed * 2));
}
</style>
