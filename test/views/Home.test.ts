import Home from "@/views/Home.vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("Home component", () => {
  it("El componente Home renderiza correctamente", () => {
    const wrapper = shallowMount(Home, {
      global: {
        stubs: ["Separate"],
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
