import J5TooltipView from "@/views/j5Components/J5Tooltip.vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5Tooltip component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate"],
  };

  it("El componente J5Tooltip renderiza correctamente", () => {
    const wrapper = shallowMount(J5TooltipView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
