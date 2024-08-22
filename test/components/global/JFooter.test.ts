import JFooter from "@/components/global/JFooter.vue";
import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import { GAnalyticsSelectContentInject } from "@/shared/constants/injectsKey";
import { ANALYTICS } from "@/shared/constants";

describe("JFooter component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("El componente JFooter renderiza correctamente", async () => {
    const selectContentMock = { selectContent: vi.fn() };

    const wrapper = mount(JFooter, {
      global: {
        provide: {
          [GAnalyticsSelectContentInject as symbol]: selectContentMock,
        },
      },
    });

    const icons = wrapper.findAll(".footer__link");

    expect(wrapper.html()).toBeTruthy();
    expect(icons.length).toBe(6);

    await icons[0].trigger("click");
    expect(selectContentMock.selectContent).toHaveBeenCalled();
    expect(selectContentMock.selectContent).toHaveBeenCalledWith(
      ANALYTICS.ORIGIN_CONTACTS,
      "youtube"
    );
    wrapper.unmount();
  });
});
