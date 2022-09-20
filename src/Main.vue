<script setup>
import JHeader from "@/components/JHeader.vue";
import JFooter from "@/components/JFooter.vue";
</script>
<template>
  <main class="main">
    <JHeader />
    <router-view></router-view>
    <JFooter />
  </main>
</template>