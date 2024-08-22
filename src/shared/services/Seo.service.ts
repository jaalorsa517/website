import { IHandlerSeo } from "@/shared/models/interfaces/IHandlerSeo";
import { SeoType } from "@/shared/models/types/Seo";

export class SeoService implements IHandlerSeo {
  constructor(private window: Window) {}

  handlerSeo(seo: SeoType | undefined): void {
    if (!seo) return;
    document.title = seo.title || "jaalorsa";
    this.tagMeta("title", seo.title || "jaalorsa");
    this.tagMeta("description", seo.description || "");
    this.tagMeta("keywords", seo.keywords.join(", "));
    this.tagMeta("robots", seo.robots.join(", "));
    this.tagLink("canonical", seo.canonical || "https://jaalorsa.com");
  }

  private tagMeta(type: string, content: string) {
    const document = this.window.document;
    let meta = document.querySelector(`meta[name="${type}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", type);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }

  private tagLink(type: string, content: string) {
    const document = this.window.document;
    let link = document.querySelector(`link[rel="${type}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", type);
      document.head.appendChild(link);
    }
    link.setAttribute("href", content);
  }
}
