import J5VSelectView from "@/views/j5ComponentsVue/J5VSelect.vue";
import { J5VSelct } from "@jaalorsa/j5-components-vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5VSelectView component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate"],
  };

  it("El componente J5VSelectView renderiza correctamente", () => {
    const wrapper = shallowMount(J5VSelectView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });

  it("ModelValue funciona correctamente", ()=>{
    const wrapper = shallowMount(J5VSelectView, {
      global: {
        ...globals,
      },
    });
    const wrapperInstance = wrapper.vm as any;
    const selectComponent = wrapper.findComponent(J5VSelct);
    selectComponent.vm.$emit("update:modelValue", "green");
    expect(wrapperInstance.modelValue).toBe("green");
    wrapper.unmount();
  }
  )
});
