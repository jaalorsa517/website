<script setup lang="ts">
import { defineAsyncComponent, inject } from "vue";
import JHeader from "@/components/global/JHeader.vue";
import JFooter from "@/components/global/JFooter.vue";
import { IsProdInject } from "@/shared/constants/injectsKey";

const isProd = inject<boolean>(IsProdInject);

const PromptSW = isProd
  ? defineAsyncComponent(() => import("@/components/global/PromptSW.vue"))
  : null;
</script>
<template>
  <main class="main">
    <JHeader />
    <router-view class="contentBody" v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </router-view>
    <JFooter />
  </main>
  <PromptSW v-if="PromptSW" />
</template>
<style lang="scss">
.contentBody {
  min-height: calc(100vh - ($height_fixed * 2));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
