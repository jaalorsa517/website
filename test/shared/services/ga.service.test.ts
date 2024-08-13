import { describe, it, expect, beforeEach, vi } from "vitest";
import { GAnalyticsSelectContent } from "@/shared/services/ga.services";
import { logEvent } from "firebase/analytics";

vi.mock("firebase/analytics");

describe("GAnalyticsService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("SelectContent success", () => {
    const analyticsInstance = {} as any;
    const gaService = new GAnalyticsSelectContent(analyticsInstance);
    const contentId = "contentId";
    const contentType = "contentType";

    gaService.selectContent(contentType, contentId);

    expect(logEvent).toBeCalledWith(analyticsInstance, "select_content", {
      content_type: contentType,
      content_id: contentId,
    });
  });

  it("SelectContent without analyticsInstance", async () => {
    const analyticsInstance = undefined as any;
    const gaService = new GAnalyticsSelectContent(analyticsInstance);

    const contentId = "contentId";
    const contentType = "contentType";

    gaService.selectContent(contentType, contentId);

    expect(logEvent).not.toHaveBeenCalled();
  });
});
