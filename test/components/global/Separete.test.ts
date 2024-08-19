import Separate from "@/components/global/Separate.vue";
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

describe("Separete component", () => {
  it("El componente Separete renderiza con prop default", () => {
    const wrapper = mount(Separate);
    const separate = wrapper.find(".separate");
    const separeteLineOne = wrapper.find(".separate__line.separate__line--one");
    const separeteLineDos = wrapper.find(".separate__line.separate__line--dos");

    expect(wrapper.html()).toBeTruthy();
    expect(separate.exists()).toBeTruthy();
    expect(separeteLineOne.exists()).toBeTruthy();
    expect(separeteLineDos.exists()).toBeTruthy();
    wrapper.unmount();
  });

  it("El componente Separete renderiza con prop", () => {
    const wrapper = mount(Separate, {
      props:{
        isNone: true
      }
    });
    const separate = wrapper.find(".separate.none");
    const separeteLineOne = wrapper.find(".separate__line.separate__line--one.none");
    const separeteLineDos = wrapper.find(".separate__line.separate__line--dos.none");

    expect(wrapper.html()).toBeTruthy();
    expect(separate.exists()).toBeTruthy();
    expect(separeteLineOne.exists()).toBeTruthy();
    expect(separeteLineDos.exists()).toBeTruthy();
    wrapper.unmount();
  });
});
