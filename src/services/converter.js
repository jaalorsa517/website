export function convertStringJ5(str) {
  return str
    .replace(/<j5-/g, "&lt;j5-")
    .replace(/<J5V/g, "&lt;J5V")
    .replace(/<\/J5V/g, "&lt;/J5V")
    .replace(/\n/g, "&=2ñ")
    .replace(/(<code>.*)(<template)(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<template/g, "&lt;template")
    )
    .replace(/(<code>.*)<\/template(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/template/g, "&lt;/template")
    )
    .replace(/(<code>.*)<slot(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<slot/g, "&lt;slot")
    )
    .replace(/(<code>.*)<\/slot(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/slot/g, "&lt;/slot")
    )
    .replace(/(<code>.*)<p(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<p/g, "&lt;p")
    )
    .replace(/(<code>.*)<\/p(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/p/g, "&lt;/p")
    )
    .replace(/(<code>.*)<h(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<h/g, "&lt;h")
    )
    .replace(/(<code>.*)<\/h(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/h/g, "&lt;/h")
    )
    .replace(/(<code>.*)<i(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<i/g, "&lt;i")
    )
    .replace(/(<code>.*)<\/i(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/i/g, "&lt;/i")
    )
    .replace(/(<code>.*)<b(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<b/g, "&lt;b")
    )
    .replace(/(<code>.*)<\/b(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/b/g, "&lt;/b")
    )
    .replace(/(<code>.*)<div(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<div/g, "&lt;div")
    )
    .replace(/(<code>.*)<\/div(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/div/g, "&lt;/div")
    )
    .replace(/(<code>.*)<section(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<section/g, "&lt;/section")
    )
    .replace(/(<code>.*)<\/section(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/section/g, "&lt;/section")
    )
    .replace(/(<code>.*)<a(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<a/g, "&lt;/a")
    )
    .replace(/(<code>.*)<\/a(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/a/g, "&lt;/a")
    )
    .replace(/(<code>.*)<form(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<form/g, "&lt;/form")
    )
    .replace(/(<code>.*)<\/form(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/form/g, "&lt;/form")
    )
    .replace(/(<code>.*)<ul(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<ul/g, "&lt;/ul")
    )
    .replace(/(<code>.*)<\/ul(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/ul/g, "&lt;/ul")
    )
    .replace(/(<code>.*)<ul(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<ul/g, "&lt;/ul")
    )
    .replace(/(<code>.*)<\/ul(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/ul/g, "&lt;/ul")
    )
    .replace(/(<code>.*)<svg(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<svg/g, "&lt;/svg")
    )
    .replace(/(<code>.*)<\/svg(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<\/svg/g, "&lt;/svg")
    )
    .replace(/(<code>.*)<input(.*<\/code>)/gm, (matchValue) =>
      matchValue.replace(/<input/g, "&lt;/input")
    )
    .replace(/&=2ñ/g, "\n");
}
