import Intro from "@/components/home/Intro.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("Intro component", () => {

  it("El componente Intro renderiza correctamente", () => {
    const wrapper = mount(Intro);
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
})