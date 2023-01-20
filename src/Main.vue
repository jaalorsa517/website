<script setup>
import JHeader from "@/components/global/JHeader.vue";
import JFooter from "@/components/global/JFooter.vue";
import PromptSW from "@/components/global/PromptSW.vue";
</script>
<template>
  <main class="main">
    <JHeader />
    <router-view class="contentBody"></router-view>
    <JFooter />
  </main>
  <PromptSW />
</template>
<style lang="scss">
.contentBody {
  min-height: calc(100vh - ($height_fixed * 2));
}
</style>
