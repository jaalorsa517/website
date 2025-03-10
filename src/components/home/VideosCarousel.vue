<script setup lang="ts">
import { Components } from "@/assets/resources/language/index";
import { computed } from "@vue/reactivity";
import { useRoot } from "@/plugins/store";
import { inject, onBeforeMount, reactive } from "vue";
import SlideVideo from "@/components/home/SlideVideo.vue";
import { YoutubeServiceInject } from "@/shared/constants/injectsKey";
import { PlaylistItemsType, PlayItemType } from "@/shared/models/types/youtube";
import { IYoutubeService } from "@/shared/models/interfaces/IYoutubeService";

const youtubeService = inject<IYoutubeService>(YoutubeServiceInject) as IYoutubeService

const store = useRoot();
const videos = reactive<PlayItemType[]>([]);

const title = computed(() => Components.carousel.title);
// const moreVideos = computed(() => Components.carousel.moreVideos);
const countSlides = computed(() => {
  if (store.isMobile) return 1;
  if (videos.length <= 3) return videos.length;
  return 3;
});

onBeforeMount(() => {
  youtubeService.getVideos({ maxResults: 15, pageToken: "" })
    .then((playlistItems: PlaylistItemsType) => {
      const _items = playlistItems.items || []
      videos.splice(0, videos.length, ..._items);
    })
    .catch(() => {
      videos.splice(0, videos.length);
    });
});
</script>
<template>
  <div class="carousel" v-if="videos.length">
    <h2 class="carousel__title">{{ title }}</h2>
    <j5-carousel class="carousel__slider" transition-auto="10000" :count-slides="countSlides">
      <div class="carousel__container" v-for="video in videos" :key="video.videoId">
        <SlideVideo :video="video"></SlideVideo>
      </div>
      <!-- <div class="carousel__slide carousel__slide--moreVideo">
        <div class="carousel__imgContainer carousel__imgContainer--moreVideo">
          <RouterLink class="carousel__moreVideo" to="/videos">{{ moreVideos }}</RouterLink>
        </div>
      </div> -->
    </j5-carousel>
  </div>
</template>
<style lang="scss">
.carousel {
  width: 100%;
  padding: $padding_sections;

  &__slider {
    margin: auto;
    --color_back_arrows: var(--color-font-dark-50);
    --size_icon: 1.2em;
  }

  &__slide {
    display: block;
    margin: 0 0.5em;
    position: relative;
    cursor: pointer;

    &--moreVideo {
      cursor: initial;
    }
  }

  &__title {
    padding: 0 0 1em 0;
    text-align: center;
  }

  &__imgContainer {
    width: 200px;
    height: 110px;
    text-decoration: none;
    border: 1px solid var(--color-font-dark);
    border-radius: 10px;

    &--moreVideo {
      @include Flex(row, center);
      background: var(--color-third);
    }
  }

  &__moreVideo {
    font-weight: 700;
    font-size: 1.2em;
    flex: 1 0;
    white-space: nowrap;
    text-align: center;
  }

  & &__moreVideo {
    color: var(--color-font-light);
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &__info {
    width: 100%;
    height: 40%;
    padding: 0.5em;
    @include Flex(column);
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--color-gray-light);
    background-color: var(--color-font-dark-80);
    border-radius: 0 0 10px 10px;
  }

  &__text {
    font-size: 0.9em;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    overflow: hidden;
  }

  @include tabletWidth() {
    &__title {
      text-align: start;
    }

    &__slider {
      max-width: 95%;
      --size_icon: 1.5em;
    }

    &__imgContainer {
      width: 280px;
      height: 160px;
    }

    &__info {
      height: 25%;
      transition: height 0.3s ease-in-out, justify-content 0.2s 0.1s ease-in-out;
    }

    &__slide:hover &__info {
      height: 50%;
      justify-content: center;
    }
  }
}
</style>
