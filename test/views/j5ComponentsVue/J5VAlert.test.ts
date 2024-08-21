import J5VAlertView from "@/views/j5ComponentsVue/J5VAlert.vue";
import { J5VAlert } from "@jaalorsa/j5-components-vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { shallowMount, mount } from "@vue/test-utils";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5VAlert component", () => {
  const globals = {
    provide: {
      [ConverterServiceInject as symbol]: {
        convertStringJ5: vi.fn(),
      },
    },
    stubs: ["Separate"],
  };

  vi.mock("vue-router", () => ({
    useRouter: vi.fn(() => ({
      push: () => {},
    })),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente J5VAlert renderiza correctamente", () => {
    const wrapper = shallowMount(J5VAlertView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });

  it("El componente J5VAlert activa modal Alerta Opcion Props", async () => {
    const wrapper = shallowMount(J5VAlertView, {
      global: {
        ...globals,
      },
    });

    const buttonAlertOptionProps = wrapper.findAll(".alert__container button");

    let alertComponent = wrapper.findComponent(J5VAlert);
    expect(alertComponent.exists()).toBeFalsy();
    await buttonAlertOptionProps[0].trigger("click");
    
    alertComponent = wrapper.findComponent(J5VAlert);
    expect(alertComponent.isVisible()).toBeTruthy();
    expect(alertComponent.props("title")).toBe("Titulo Props");
    expect(alertComponent.props("body")).toBe(
      "Texto inyectado a través de props."
    );
    expect(alertComponent.props("btnOkText")).toBe("Ok");
    expect(alertComponent.props("hasBtnCancel")).toBe(true);
    
    await alertComponent.vm.$emit("confirm");
    alertComponent = wrapper.findComponent(J5VAlert);
    expect(alertComponent.exists()).toBeFalsy();

    wrapper.unmount();
  });

  it("El componente J5VAlert activa modal Alerta Opcion Slots y activar boton Denegar", async () => {
    const wrapper = mount(J5VAlertView, {
      global: {
        ...globals,
      },
    });
    const buttonAlertOptionSlots = wrapper.findAll(".alert__container button");
    await buttonAlertOptionSlots[1].trigger("click");
    
    let alertComponent = wrapper.findComponent(J5VAlert);
    expect(alertComponent.exists()).toBeTruthy();
    expect(alertComponent.find("h2").text()).toBe("Titulo Slots");
    expect(alertComponent.find("p").text()).toBe(
      "Texto inyectado a través de slots."
    );
    const buttons = alertComponent.findAll(".alert__container.alert__container--btn button");
    expect(buttons[0].text()).toBe("Aprobar");
    expect(buttons[1].text()).toBe("Denegar");

    await buttons[1].trigger("click");
    alertComponent = wrapper.findComponent(J5VAlert);
    expect(alertComponent.exists()).toBeFalsy();

    wrapper.unmount();
  });

  it("El componente J5VAlert activa modal Alerta Opcion Slots y activar boton Aprobar", async () => {
    const wrapper = mount(J5VAlertView, {
      global: {
        ...globals,
      },
    });
    const buttonAlertOptionSlots = wrapper.findAll(".alert__container button");
    await buttonAlertOptionSlots[1].trigger("click");
    
    let alertComponent = wrapper.findComponent(J5VAlert);
    const buttons = alertComponent.findAll(".alert__container.alert__container--btn button");
    expect(buttons[0].text()).toBe("Aprobar");

    await buttons[0].trigger("click");
    alertComponent = wrapper.findComponent(J5VAlert);
    expect(alertComponent.exists()).toBeFalsy();

    wrapper.unmount();
  });
});
