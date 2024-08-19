import VideosCarousel from "@/components/home/VideosCarousel.vue";
import SlideVideo from "@/components/home/SlideVideo.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import {
  GAnalyticsSelectContentInject,
  YoutubeServiceInject,
} from "@/shared/constants/injectsKey";

describe("VideosCarousel component", () => {
  vi.mock("@/plugins/store", () => ({
    useRoot: vi
      .fn()
      .mockImplementationOnce(() => ({
        isMobile: true,
      }))
      .mockImplementation(() => ({
        isMobile: false,
      })),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente VideosCarousel renderiza 1 video en mobile correctamente", async () => {
    const itemVideo = {
      title: "Video1",
      description: "Video1Description",
      thumbnail: "Video1Thumbnail",
      videoId: "Video1VideoId",
      videoPublishedAt: "Video1VideoPublishedAt",
    };
    const wrapper = mount(VideosCarousel, {
      global: {
        provide: {
          [YoutubeServiceInject as symbol]: {
            getVideos: vi.fn().mockResolvedValueOnce({
              items: [itemVideo],
            }),
          },
          [GAnalyticsSelectContentInject as symbol]: {
            selectContent: vi.fn(),
          },
        },
      },
    });

    await wrapper.vm.$nextTick();

    const carousel = wrapper.find(".carousel");
    const slideVideo = wrapper.findAllComponents(SlideVideo);

    expect(wrapper.html()).toBeTruthy();
    expect(carousel.exists()).toBeTruthy();
    expect(slideVideo[0].props().video).toStrictEqual(itemVideo);
    wrapper.unmount();
  });

  it("El componente VideosCarousel renderiza 1 video en desktop correctamente", async () => {
    const itemVideo = {
      title: "Video1",
      description: "Video1Description",
      thumbnail: "Video1Thumbnail",
      videoId: "Video1VideoId",
      videoPublishedAt: "Video1VideoPublishedAt",
    };
    const wrapper = mount(VideosCarousel, {
      global: {
        provide: {
          [YoutubeServiceInject as symbol]: {
            getVideos: vi.fn().mockResolvedValueOnce({
              items: [itemVideo],
            }),
          },
          [GAnalyticsSelectContentInject as symbol]: {
            selectContent: vi.fn(),
          },
        },
      },
    });

    await wrapper.vm.$nextTick();

    const carousel = wrapper.find(".carousel");
    const slideVideo = wrapper.findAllComponents(SlideVideo);

    expect(wrapper.html()).toBeTruthy();
    expect(carousel.exists()).toBeTruthy();
    expect(slideVideo[0].props().video).toStrictEqual(itemVideo);
    wrapper.unmount();
  });

  it("El componente VideosCarousel renderiza 4 videos correctamente", async () => {
    const itemsVideos = [
      {
        title: "Video1",
        description: "Video1Description",
        thumbnail: "Video1Thumbnail",
        videoId: "Video1VideoId",
        videoPublishedAt: "Video1VideoPublishedAt",
      },
      {
        title: "Video2",
        description: "Video2Description",
        thumbnail: "Video2Thumbnail",
        videoId: "Video2VideoId",
        videoPublishedAt: "Video2VideoPublishedAt",
      },
      {
        title: "Video3",
        description: "Video3Description",
        thumbnail: "Video3Thumbnail",
        videoId: "Video3VideoId",
        videoPublishedAt: "Video3VideoPublishedAt",
      },
      {
        title: "Video4",
        description: "Video4Description",
        thumbnail: "Video4Thumbnail",
        videoId: "Video4VideoId",
        videoPublishedAt: "Video4VideoPublishedAt",
      },
    ];
    const wrapper = mount(VideosCarousel, {
      global: {
        provide: {
          [YoutubeServiceInject as symbol]: {
            getVideos: vi.fn().mockResolvedValueOnce({
              items: itemsVideos,
            }),
          },
          [GAnalyticsSelectContentInject as symbol]: {
            selectContent: vi.fn(),
          },
        },
      },
    });

    await wrapper.vm.$nextTick();

    const carousel = wrapper.find(".carousel");
    const slideVideo = wrapper.findAllComponents(SlideVideo);

    expect(wrapper.html()).toBeTruthy();
    expect(carousel.exists()).toBeTruthy();
    expect(slideVideo[0].props().video).toStrictEqual(itemsVideos[0]);
    expect(slideVideo[1].props().video).toStrictEqual(itemsVideos[1]);
    expect(slideVideo[2].props().video).toStrictEqual(itemsVideos[2]);
    expect(slideVideo[3].props().video).toStrictEqual(itemsVideos[3]);
    wrapper.unmount();
  });

  it("El componente VideosCarousel renderiza sin videos", () => {
    const wrapper = mount(VideosCarousel, {
      global: {
        provide: {
          [YoutubeServiceInject as symbol]: {
            getVideos: vi.fn().mockResolvedValueOnce([]),
          },
        },
      },
    });

    const carousel = wrapper.find(".carousel");

    expect(wrapper.html()).toBeTruthy();
    expect(carousel.exists()).toBeFalsy();
    wrapper.unmount();
  });

  it("El componente VideosCarousel renderiza sin videos a causa de un error en la peticion", () => {
    const wrapper = mount(VideosCarousel, {
      global: {
        provide: {
          [YoutubeServiceInject as symbol]: {
            getVideos: vi.fn().mockRejectedValueOnce("error"),
          },
        },
      },
    });

    const carousel = wrapper.find(".carousel");

    expect(wrapper.html()).toBeTruthy();
    expect(carousel.exists()).toBeFalsy();
    wrapper.unmount();
  });
});
