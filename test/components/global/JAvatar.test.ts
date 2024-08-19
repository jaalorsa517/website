import JAvatar from "@/components/global/JAvatar.vue";
import { J5VIcons } from "@jaalorsa/j5-components-vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect, afterEach, vi } from "vitest";

describe("JAvatar component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente JAvatar renderiza correctamente con Skeleton", () => {
    const wrapper = mount(JAvatar, {
      props: {
        url: "",
      },
    });
    const j5Icons = wrapper.findComponent(J5VIcons);

    expect(wrapper.html()).toBeTruthy();
    expect(wrapper.find(".avatar__ico").exists()).toBeTruthy();
    expect(wrapper.find(".avatar__img").exists()).toBeFalsy();
    expect(j5Icons.html()).toBeTruthy();
    expect(j5Icons.props().name).toBe("userSkeleton");
    wrapper.unmount();
  });

  it("El componente JAvatar renderiza correctamente con url", async () => {
    const wrapper = mount(JAvatar, {
      props: {
        url: "https://urltest",
      },
    });

    const img = wrapper.find(".avatar__img");

    await img.trigger("load");

    expect(wrapper.html()).toBeTruthy();
    expect(wrapper.find(".avatar__ico").exists()).toBeFalsy();
    expect(img.exists()).toBeTruthy();
    wrapper.unmount();
  });
});
