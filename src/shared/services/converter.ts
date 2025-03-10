import { IConverter } from "@/shared/models/interfaces/IConverter";

export class ConverterService implements IConverter {
  convertStringJ5(str: string) {
    return str
      .replace(/<j5-/g, "&lt;j5-")
      .replace(/<J5V/g, "&lt;J5V")
      .replace(/<\/J5V/g, "&lt;/J5V")
      .replace(/\n/g, "&=2ñ")
      .replace(/<code\b[^>]*>(.*?)<\/code>/g, (matchValue: string) =>
        matchValue
          .replace(/<template/g, "&lt;template")
          .replace(/<\/template/g, "&lt;/template")
          .replace(/<slot/g, "&lt;slot")
          .replace(/<\/slot/g, "&lt;/slot")
          .replace(/<p/g, "&lt;p")
          .replace(/<\/p/g, "&lt;/p")
          .replace(/<h/g, "&lt;h")
          .replace(/<\/h/g, "&lt;/h")
          .replace(/<div/g, "&lt;div")
          .replace(/<\/div/g, "&lt;/div")
          .replace(/<span/g, "&lt;span")
          .replace(/<\/span/g, "&lt;/span")
          .replace(/<i/g, "&lt;i")
          .replace(/<\/i/g, "&lt;/i")
          .replace(/<b/g, "&lt;b")
          .replace(/<\/b/g, "&lt;/b")
          .replace(/<a/g, "&lt;a")
          .replace(/<\/a/g, "&lt;/a")
          .replace(/<section/g, "&lt;section")
          .replace(/<\/section/g, "&lt;/section")
          .replace(/<button/g, "&lt;button")
          .replace(/<\/button/g, "&lt;/button")
          .replace(/<form/g, "&lt;form")
          .replace(/<\/form/g, "&lt;/form")
          .replace(/<ul/g, "&lt;ul")
          .replace(/<\/ul/g, "&lt;/ul")
          .replace(/<ol/g, "&lt;ol")
          .replace(/<\/ol/g, "&lt;/ol")
          .replace(/<li/g, "&lt;li")
          .replace(/<\/li/g, "&lt;/li")
          .replace(/<svg/g, "&lt;svg")
          .replace(/<\/svg/g, "&lt;/svg")
          .replace(/<input/g, "&lt;input")
          .replace(/<img/g, "&lt;img")
      )
      .replace(/&=2ñ/g, "\n");
  }
}
