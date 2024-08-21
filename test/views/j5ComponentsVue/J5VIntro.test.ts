import J5VIntroView from "@/views/j5ComponentsVue/J5VIntro.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";
import * as routes from "@/plugins/router/routes";

describe("J5VIcons component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate", "RouterLink"],
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  vi.spyOn(routes, "routes", "get")
    .mockReturnValueOnce([
      {
        name: "Librería de componentes",
        children: [],
      },
    ] as any)
    .mockReturnValueOnce([...routes.routes]);

  it("El componente renderiza sin menu navegacion", () => {
    const wrapper = shallowMount(J5VIntroView, {
      global: {
        ...globals,
      },
    });

    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });

  it("El componente J5VIcons renderiza correctamente", () => {
    const wrapper = shallowMount(J5VIntroView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });
});
