import J5MenuHamburguerView from "@/views/j5Components/J5MenuHamburguer.vue";
import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import {
  ConverterServiceInject,
  WindowInject,
} from "@/shared/constants/injectsKey";

describe("J5MenuHamburguer component", () => {
  const body: Record<string, any> = {
    setAttribute: vi
      .fn()
      .mockImplementation((key: string, value: string) => {
        body[key] = value;
      }),
  };
  
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
      [WindowInject as symbol]: {
        document: {
          body,
        },
      },
    },
    stubs: ["Separate"],
  };

  it("El componente J5MenuHamburguer renderiza correctamente", () => {
    const wrapper = shallowMount(J5MenuHamburguerView, {
      global: {
        ...globals,
      },
    });

    const hamburguer = wrapper.find("j5-menu-hamburguer");
    hamburguer.trigger("isOpen");
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });

  it("j5-menu-hamburguer emite el evento isOpen", async () => {
    const wrapper = shallowMount(J5MenuHamburguerView, {
      global: {
        ...globals,
      },
    });
    const hamburguer = wrapper.find("j5-menu-hamburguer");

    hamburguer.trigger("isOpen", {
      detail: { isOpen: true },
    });
    expect(body.scroll).toBeTruthy();
    wrapper.unmount();
  });
});
