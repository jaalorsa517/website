import { Analytics, logEvent } from "firebase/analytics";
import { ISelectContentEvent } from "@/shared/models/interfaces/IAnalytics"

export class GAnalyticsSelectContent implements ISelectContentEvent{

  constructor(private analyticsInstance: Analytics){}

  selectContent(contentType: string, contentId: string) {
    if(!this.analyticsInstance) return;
    logEvent(this.analyticsInstance, "select_content", {
      content_type: contentType,
      content_id: contentId,
    });
  }

}