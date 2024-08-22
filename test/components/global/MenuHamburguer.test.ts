import MenuHamburguer from "@/components/global/MenuHamburguer.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";

describe("MenuHamburguer component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  vi.mock("@/plugins/store", () => ({
    useRoot: vi
      .fn()
      .mockImplementationOnce(() => ({
        isMobile: true,
      }))
      .mockImplementation(() => ({
        isMobile: false,
      })),
  }));

  it("El componente MenuHamburguer renderiza correctamente en mobile y funciona correctamente el evento isOpen", async () => {
    const wrapper = mount(MenuHamburguer);
    const j5MenuHamburguer = wrapper.find(".hamburguer__menuMobile");

    expect(wrapper.html()).toBeTruthy();
    expect(j5MenuHamburguer.exists()).toBeTruthy();

    await j5MenuHamburguer.trigger("isOpen", {
      detail: { isOpen: true },
    });
    expect(document.body.style.overflow).toBe("hidden");

    await j5MenuHamburguer.trigger("isOpen", {
      detail: { isOpen: false },
    });
    expect(document.body.style.overflow).toBe("auto");
    wrapper.unmount();
  });

  it("El componente MenuHamburguer renderiza correctamente en desktop", () => {
    const wrapper = mount(MenuHamburguer);
    const j5MenuHamburguer = wrapper.find(".hamburguer__content");
    expect(wrapper.html()).toBeTruthy();
    expect(j5MenuHamburguer.exists()).toBeTruthy();
    wrapper.unmount();
  });
});
