import J5VDatalistView from "@/views/j5ComponentsVue/J5VDatalist.vue";
import { J5VDatalist } from "@jaalorsa/j5-components-vue";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, it, expect, vi, afterEach } from "vitest";
import { ConverterServiceInject } from "@/shared/constants/injectsKey";

describe("J5VDatalist component", () => {
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

  it("El componente J5VDatalist renderiza correctamente", () => {
    const wrapper = shallowMount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    expect(wrapper.html()).toBeTruthy();
    wrapper.unmount();
  });

  it("Datalist Default", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    const datalistComponent = wrapper.findAllComponents(J5VDatalist);
    let textSelected = wrapper.findAll(".datalist__container p");
    expect(textSelected[0].text()).toBe("Texto seleccionado []");

    await datalistComponent[0].vm.$emit("inputValue", "itemTest");
    const itemAdd = wrapper.find(".j5v-datalist__item");
    expect(itemAdd.text()).toBe("Option itemTest");

    await datalistComponent[0].vm.$emit("itemSelected", "itemTest");
    textSelected = wrapper.findAll(".datalist__container p");
    expect(textSelected[0].text().replace(/\n/g, "")).toBe(
      'Texto seleccionado [  "itemTest"]'
    );

    wrapper.unmount();
  });

  it("Datalist Default y v-model", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    let textSelected = wrapper.findAll(".datalist__container p");
    expect(textSelected[1].text()).toBe("Texto seleccionado []");

    wrapper.unmount();
  });

  it("Event y v-model inputValue3", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });

    const datalistComponent = wrapper.findAllComponents(J5VDatalist)[1];
    const wrapperInstance = wrapper.vm as any;

    datalistComponent.vm.$emit("itemSelected", "itemTestVmodel");
    datalistComponent.vm.$emit("update:modelValue", "itemTestVmodel");
    datalistComponent.vm.$emit("inputValue", "itemTestVmodel");
    expect(wrapperInstance.inputValue3).toBe("itemTestVmodel");
    wrapper.unmount();
  });

  it("Event y v-model inputValue", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });

    const datalistComponent = wrapper.findAllComponents(J5VDatalist)[2];
    const wrapperInstance = wrapper.vm as any;

    datalistComponent.vm.$emit("itemSelected", "itemTestVmodel");
    datalistComponent.vm.$emit("update:modelValue", "itemTestVmodel");
    datalistComponent.vm.$emit("inputValue", "itemTestVmodel");
    expect(wrapperInstance.inputValue).toBe("itemTestVmodel");
    wrapper.unmount();
  });

  it("Watcher inputValue when value is empty", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.inputValue = undefined;
    await wrapperInstance.$nextTick();
    expect(wrapperInstance.options2).toStrictEqual([]);
    wrapper.unmount();
  });

  it("Watcher inputValue when value have value", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.inputValue = "itemTest";
    await wrapperInstance.$nextTick();
    expect(wrapperInstance.options2).include("Option itemTest");
    wrapper.unmount();
  });

  it("Watcher inputValue3 when value is empty", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.inputValue3 = undefined;
    await wrapperInstance.$nextTick();
    expect(wrapperInstance.options3).toStrictEqual([
      "Option 1",
      "Option 2",
      "Option 3",
    ]);
    wrapper.unmount();
  });

  it("Watcher inputValue3 when value have value", async () => {
    const wrapper = mount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    const wrapperInstance = wrapper.vm as any;
    wrapperInstance.inputValue3 = "itemTest";
    await wrapperInstance.$nextTick();
    expect(wrapperInstance.options3).include("Option itemTest");
    wrapper.unmount();
  });

  it("Datalist con slot", async () => {
    const wrapper = shallowMount(J5VDatalistView, {
      global: {
        ...globals,
      },
    });
    let textSelected = wrapper.findAll(".datalist__container p");
    expect(textSelected[2].text()).toBe("Texto seleccionado []");

    wrapper.unmount();
  });
});
