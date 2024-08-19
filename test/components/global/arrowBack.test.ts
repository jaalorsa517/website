import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { useRouter } from "vue-router";
import ArrowBack from "@/components/global/ArrowBack.vue";
import { RoutesName } from "@/assets/resources/language";
import { afterEach } from "node:test";
import { J5VIcons } from "@jaalorsa/j5-components-vue"

describe("ArrowBack component", async () => {
  vi.mock("vue-router", () => ({
    useRouter: vi.fn(() => ({
      push: () => {},
    })),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente monta con default", async () => {
    const push = vi.fn();
    (useRouter as any).mockImplementationOnce(() => ({
      push,
    }));

    const wrapper = mount(ArrowBack);
    const text = wrapper.find(".arrowBack__textBack");
    const textDefault = "Regresar";

    expect(wrapper.html()).toBeTruthy();
    expect(text.text()).toBe(textDefault);

    await wrapper.trigger("click");
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: RoutesName.inicio });
    wrapper.unmount();
  });

  it("El componente monta con props", async () => {
    const push = vi.fn();
    (useRouter as any).mockImplementationOnce(() => ({
      push,
    }));
    const textProp = "Regresar a inicio";

    const wrapper = mount(ArrowBack, {
      props: {
        text: textProp,
        routeName: "TestRoute",
      },
    });
    const text = wrapper.find(".arrowBack__textBack");

    expect(wrapper.html()).toBeTruthy();
    expect(text.text()).toBe(textProp);

    await wrapper.trigger("click");
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith({ name: "TestRoute" });
    wrapper.unmount();
  });

  it("El componente J5VIcons renderiza correctamente",  () => {
    const wrapper = mount(ArrowBack);
    const j5Icons = wrapper.findComponent(J5VIcons);

    expect(j5Icons.html()).toBeTruthy();
    expect(j5Icons.props()).toMatchObject({ name: "arrow_back" });
    wrapper.unmount();
  });
});
