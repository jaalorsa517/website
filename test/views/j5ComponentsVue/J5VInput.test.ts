import J5VInputView from "@/views/j5ComponentsVue/J5VInput.vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5VIcons component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate"],
  };

  it("El componente J5VIcons renderiza correctamente", () => {
    const wrapper = shallowMount(J5VInputView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
