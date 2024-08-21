import J5IntroView from "@/views/j5Components/J5Intro.vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";
import * as routes from "@/plugins/router/routes";

describe("J5Carousel component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate", "RouterLink"],
  };

  vi.spyOn(routes, "routes", "get")
    .mockReturnValueOnce([
      {
        name: "Librería de componentes Vue",
        children: [],
      },
    ] as any)
    .mockReturnValueOnce([...routes.routes]);

  it("El componente renderiza sin menu navegacion", () => {
    const wrapper = shallowMount(J5IntroView, {
      global: {
        ...globals,
      },
    });

    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });

  it("El componente J5Carousel renderiza correctamente", () => {
    const wrapper = shallowMount(J5IntroView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
