import { SeoType } from "@/shared/models/types/Seo";

export interface IHandlerSeo {
  handlerSeo(seo: SeoType): void;
}