import { InjectionKey } from "vue";
import { ISelectContentEvent } from "@/shared/models/interfaces/IAnalytics";
import { IConverter } from "@/shared/models/interfaces/IConverter";
import { IYoutubeService } from "@/shared/models/interfaces/IYoutubeService";

export const IsProdInject = Symbol() as InjectionKey<boolean>;

export const GAnalyticsSelectContentInject =
  Symbol() as InjectionKey<ISelectContentEvent>;

export const YoutubeServiceInject = Symbol() as InjectionKey<IYoutubeService>;

export const ConverterServiceInject =
  Symbol() as InjectionKey<IConverter>;
