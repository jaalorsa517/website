import J5ComponentsVue from "@/views/j5ComponentsVue/J5ComponentsVue.vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("J5ComponentsVue component", () => {
  it("El componente J5ComponentsVue renderiza correctamente", () => {
    const wrapper = shallowMount(J5ComponentsVue);
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
