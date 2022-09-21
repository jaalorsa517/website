import Showdown from "showdown";

export function transformText(text) {
  const converter = new Showdown.Converter({});
  return converter.makeHtml(text);
}
