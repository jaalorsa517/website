export function handlerSeo(seo) {
  document.title = seo.title || "jaalorsa";
  tagMeta("title", seo.title || "jaalorsa");
  tagMeta("description", seo.description || "");
  tagMeta("keywords", seo.keywords.join(", "));
  tagMeta("robots", seo.robots.join(", "));
  tagLink("canonical", seo.canonical || "https://jaalorsa.com");
}

function tagMeta(type, content) {
  let meta = document.querySelector(`meta[name="${type}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", type);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function tagLink(type, content) {
  let link = document.querySelector(`link[rel="${type}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", type);
    document.head.appendChild(link);
  }
  link.setAttribute("href", content);
}