<script setup>
import { useFirebaseStore } from "@/store/firebaseStore";
import { logEvent } from "firebase/analytics";
import { ref } from "vue";

const props = defineProps({ video: Object });

const isLoadImg = ref(false);

function onClick() {
  const firebaseStore = useFirebaseStore();
  const name = props.video.title;
  const id = props.video.videoId;
  logEvent(firebaseStore.analyticsInstance, "click_video_carousel_youtube", {
    video_name: name,
    video_id: id,
  });
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
