import JHeader from "@/components/global/JHeader.vue";
import JFooter from "@/components/global/JFooter.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { GAnalyticsSelectContentInject } from "@/shared/constants/injectsKey";

describe("JHeader component", () => {
  const selectContentMock = { selectContent: vi.fn() };

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

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente JHeader renderiza correctamente en mobile", () => {
    const wrapper = mount(JHeader, {
      global: {
        stubs: ["RouterLink"],
        provide: {
          [GAnalyticsSelectContentInject as symbol]: selectContentMock,
        },
      },
    });
    const jFooter = wrapper.findComponent(JFooter);

    expect(wrapper.html()).toBeTruthy();
    expect(jFooter.exists()).toBeTruthy();
    wrapper.unmount();
  });

  it("El componente JHeader renderiza correctamente en desktop", () => {
    const wrapper = mount(JHeader, {
      global: {
        stubs: ["RouterLink"], // Stubs for router-link and router-view in case they're rendered in your template
      },
    });
    const jFooter = wrapper.findComponent(JFooter);

    expect(wrapper.html()).toBeTruthy();
    expect(jFooter.exists()).toBeFalsy();
    wrapper.unmount();
  });
});
