import Utils from "@/views/Utils.vue";
import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";

describe("Utils component", () => {
  it("El componente Utils renderiza correctamente", () => {
    const wrapper = shallowMount(Utils);
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
