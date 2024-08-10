<script setup lang="ts">
import { inject, ref } from "vue";
import type { PropType } from 'vue'
import { ANALYTICS } from "@/shared/constants";
import { GAnalyticsSelectContentInject } from "@/shared/constants/injectsKey";
import { ISelectContentEvent } from "@/shared/models/interfaces/IAnalytics";
import { PlayItemType } from "@/shared/models/types/youtube";

const selectContentEvent = inject<ISelectContentEvent>(GAnalyticsSelectContentInject) as ISelectContentEvent

const props = defineProps({
  video: {
    type: Object as PropType<PlayItemType>,
    required: true
  }
});

const isLoadImg = ref(false);

function onClick() {
  selectContentEvent.selectContent(ANALYTICS.ORIGIN_CAROUSEL_YOUTUBE, props.video.title);
}
</script>
<template>
  <a class="carousel__slide" :href="`https://www.youtube.com/watch?v=${video.videoId}`" target="_blank"
    @click="onClick">
    <div class="carousel__imgContainer skeleton" v-if="!isLoadImg"></div>
    <div class="carousel__imgContainer" v-show="isLoadImg">
      <img class="carousel__img" :src="video.thumbnail" :alt="video.title" @load="isLoadImg = true" />
    </div>
    <div class="carousel__info" v-if="isLoadImg">
      <p class="carousel__text">{{ video.title }}</p>
    </div>
  </a>
</template>
