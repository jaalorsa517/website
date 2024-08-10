<script setup lang="ts"> 
import { ref } from "vue";
import { selectContent } from "@/services/ga.services";
import { ANALYTICS } from "@/shared/const";

const props = defineProps({ video: Object });

const isLoadImg = ref(false);

function onClick() {
  selectContent(ANALYTICS.ORIGIN_CAROUSEL_YOUTUBE, props.video?.title);
}
</script>
<template>
  <a
    class="carousel__slide"
    :href="`https://www.youtube.com/watch?v=${video.videoId}`"
    target="_blank"
    @click="onClick"
  >
    <div class="carousel__imgContainer skeleton" v-if="!isLoadImg"></div>
    <div class="carousel__imgContainer" v-show="isLoadImg">
      <img class="carousel__img" :src="video.thumbnail" :alt="video.title" @load="isLoadImg = true" />
    </div>
    <div class="carousel__info" v-if="isLoadImg">
      <p class="carousel__text">{{ video.title }}</p>
    </div>
  </a>
</template>
