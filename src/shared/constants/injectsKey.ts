import { InjectionKey } from "vue";
import { ISelectContentEvent } from "@/shared/models/interfaces/IAnalytics";
import { IConverter } from "@/shared/models/interfaces/IConverter";
import { IYoutubeService } from "@/shared/models/interfaces/IYoutubeService";
import { IHandlerSeo } from "@/shared/models/interfaces/IHandlerSeo";

export const IsProdInject = Symbol() as InjectionKey<boolean>;

export const GAnalyticsSelectContentInject =
  Symbol() as InjectionKey<ISelectContentEvent>;

export const YoutubeServiceInject = Symbol() as InjectionKey<IYoutubeService>;

export const ConverterServiceInject = Symbol() as InjectionKey<IConverter>;

export const SeoServiceInject = Symbol() as InjectionKey<IHandlerSeo>;

export const WindowInject = Symbol() as InjectionKey<Window>;
