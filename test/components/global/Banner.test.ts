import Banner from "@/components/global/Banner.vue";
import Avatar from "@/components/global/JAvatar.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, afterEach } from "vitest";

describe("Banner component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente monta correctamete", () => {
    const wrapper = mount(Banner);
    const avatar = wrapper.findComponent(Avatar);

    expect(wrapper.html()).toBeTruthy();
    expect(avatar.html()).toBeTruthy();
    expect(avatar.props().url).toBeTruthy();
    wrapper.unmount();
  });
});
