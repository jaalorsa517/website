import SlideVideo from "@/components/home/SlideVideo.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { PlayItemType } from "@/shared/models/types/youtube";
import { GAnalyticsSelectContentInject } from "@/shared/constants/injectsKey";
import { ANALYTICS } from "@/shared/constants";

describe("SlideVideo component", () => {
  const videoType: PlayItemType = {
    title: "testVideo",
    description: "testDescription",
    thumbnail: "testThumbnail",
    videoId: "testVideoId",
    videoPublishedAt: "testVideoPublishedAt",
  };

  const selectContentMock = { selectContent: vi.fn() };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente SlideVideo renderiza con video", async () => {
    const wrapper = mount(SlideVideo, {
      props: {
        video: videoType,
      },
      global: {
        provide: {
          [GAnalyticsSelectContentInject as symbol]: selectContentMock,
        },
      },
    });
    const img = wrapper.find(".carousel__img");
    await img.trigger("load");
    const text = wrapper.find(".carousel__text");

    expect(wrapper.html()).toBeTruthy();
    expect(img.exists()).toBeTruthy();
    expect(img.attributes("src")).toBe(videoType.thumbnail);
    expect(img.attributes("alt")).toBe(videoType.title);
    expect(text.text()).toBe(videoType.title);
    wrapper.unmount();
  });

  it("El componente le activa el evento click", async () => {
    const wrapper = mount(SlideVideo, {
      props: {
        video: videoType,
      },
      global: {
        provide: {
          [GAnalyticsSelectContentInject as symbol]: selectContentMock,
        },
      },
    });

    const slide = wrapper.find(".carousel__slide");
    await slide.trigger("click");
    expect(selectContentMock.selectContent).toHaveBeenCalled();
    expect(selectContentMock.selectContent).toHaveBeenCalledWith(
      ANALYTICS.ORIGIN_CAROUSEL_YOUTUBE,
      "testVideo"
    );
    wrapper.unmount();
  });

  it("El componente renderiza el skeleton", () => {
    const wrapper = mount(SlideVideo, {
      props: {
        video: videoType,
      },
      global: {
        provide: {
          [GAnalyticsSelectContentInject as symbol]: selectContentMock,
        },
      },
    });
    const skeleton = wrapper.find(".carousel__imgContainer.skeleton");
    const info = wrapper.find(".carousel__info");

    expect(skeleton.exists()).toBeTruthy();
    expect(info.exists()).toBeFalsy();
  });
});
