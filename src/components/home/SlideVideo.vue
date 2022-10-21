<script setup>
import { ref } from "vue";

const props = defineProps({ video: Object });

const isLoadImg = ref(false);
</script>
<template>
  <a class="carousel__slide" :href="`https://www.youtube.com/watch?v=${video.videoId}`" target="_blank">
    <div class="carousel__imgContainer skeleton" v-if="!isLoadImg"></div>
    <div class="carousel__imgContainer" v-show="isLoadImg">
      <img class="carousel__img" :src="video.thumbnail" :alt="video.title" @load="isLoadImg = true" />
    </div>
    <div class="carousel__info" v-if="isLoadImg">
      <p class="carousel__text">{{ video.title }}</p>
    </div>
  </a>
</template>
