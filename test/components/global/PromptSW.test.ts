import PromptSW from "@/components/global/PromptSW.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import { useRegisterSW } from "virtual:pwa-register/vue";

describe("PromptSW component", () => {
  vi.mock("virtual:pwa-register/vue", () => ({
    useRegisterSW: vi
      .fn()
      .mockImplementationOnce(() => ({
        offlineReady: ref(true),
        needRefresh: ref(false),
      }))
      .mockImplementationOnce(() => ({
        offlineReady: ref(false),
        needRefresh: ref(true),
        updateServiceWorker: vi.fn(),
      })),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente PromptSW renderiza correctamente por primera vez", async () => {
    const wrapper = mount(PromptSW);
    const text = wrapper.find(".promptSW__message span");
    const button = wrapper.find(".promptSW__button");

    expect(text.text()).toBe("Contenido disponible sin conexión.");
    expect(button.text()).toBe("Cerrar");

    await button.trigger("click");
    const container = wrapper.find(".promptSW");
    expect(container.exists()).toBeFalsy();

    wrapper.unmount();
  });

  it("El componente PromptSW renderiza correctamente cuando existe una actualización", async () => {
    const wrapper = mount(PromptSW);
    const text = wrapper.find(".promptSW__message span");
    const button = wrapper.find(".promptSW__button");

    expect(text.text()).toBe("Nuevo contenido disponible.");
    expect(button.text()).toBe("Recargar");

    await button.trigger("click");
    const updateServiceWorker =
      vi.mocked(useRegisterSW).mock.results[0].value.updateServiceWorker;
    expect(updateServiceWorker).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
