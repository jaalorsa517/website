import J5ToggleView from "@/views/j5Components/J5Toggle.vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5Toggle component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate"],
  };

  it("El componente J5Toggle renderiza correctamente", () => {
    const wrapper = shallowMount(J5ToggleView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
