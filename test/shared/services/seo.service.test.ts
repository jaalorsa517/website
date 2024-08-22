import { describe, it, expect, vi, afterEach } from "vitest";
import { SeoService } from "@/shared/services/Seo.service";
import { SeoType } from "@/shared/models/types/Seo";

describe("SeoService", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("handlerSeo: not exist SeoObject", () => {
    const seoService = new SeoService(window as unknown as Window);

    expect(seoService.handlerSeo(undefined)).toBeUndefined();
  });

  it("handlerSeo: overwrite tags seo", () => {
    window.document.head.innerHTML = `
          <title>test</title>
          <meta name="description" content="test">
          <meta name="keywords" content="test">
          <meta name="robots" content="test">
          <link rel="canonical" href="test">
        `;

    const seoService = new SeoService(window as unknown as Window);
    const seo: SeoType = {
      title: "test overwrite",
      description: "test overwrite",
      canonical: "test-overwrite",
      keywords: ["test", "overwrite"],
      robots: ["nofollow", "noindex"],
    };

    seoService.handlerSeo(seo);

    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaRobots = document.querySelector('meta[name="robots"]');
    const metaCanonical = document.querySelector('link[rel="canonical"]');

    expect(metaTitle?.getAttribute("content")).toBe("test overwrite");
    expect(metaDescription?.getAttribute("content")).toBe("test overwrite");
    expect(metaKeywords?.getAttribute("content")).toBe("test, overwrite");
    expect(metaRobots?.getAttribute("content")).toBe("nofollow, noindex");
    expect(metaCanonical?.getAttribute("href")).toBe("test-overwrite");
  });

  it("handlerSeo: not overwrite tags seo", () => {
    window.document.head.innerHTML = ``;
    const seoService = new SeoService(window as unknown as Window);
    const seo: SeoType = {
      title: "test",
      description: "test",
      canonical: "test",
      keywords: ["test"],
      robots: ["test"],
    };

    seoService.handlerSeo(seo);

    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaRobots = document.querySelector('meta[name="robots"]');
    const metaCanonical = document.querySelector('link[rel="canonical"]');

    expect(metaTitle?.getAttribute("content")).toBe("test");
    expect(metaDescription?.getAttribute("content")).toBe("test");
    expect(metaKeywords?.getAttribute("content")).toBe("test");
    expect(metaRobots?.getAttribute("content")).toBe("test");
    expect(metaCanonical?.getAttribute("href")).toBe("test");
  });

  it("handlerSeo: parameter seoObject is empty", () => {
    const seoService = new SeoService(window as unknown as Window);
    const seo: any = {
      robots: [],
      keywords: [],
    };
    seoService.handlerSeo(seo);

    const metaTitle = document.querySelector('meta[name="title"]');
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaRobots = document.querySelector('meta[name="robots"]');
    const metaCanonical = document.querySelector('link[rel="canonical"]');

    expect(metaTitle?.getAttribute("content")).toBe("jaalorsa");
    expect(metaDescription?.getAttribute("content")).toBe("");
    expect(metaKeywords?.getAttribute("content")).toBe("");
    expect(metaRobots?.getAttribute("content")).toBe("");
    expect(metaCanonical?.getAttribute("href")).toBe("https://jaalorsa.com");
  });
});
