import J5CarouselView from "@/views/j5Components/J5Carousel.vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5Carousel component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate"],
  };

  it("El componente J5Carousel renderiza correctamente", () => {
    const wrapper = shallowMount(J5CarouselView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
