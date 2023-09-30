export function convertStringJ5(str) {
  return str
  .replace(/<j5-/g, "&lt;j5-") 
  .replace(/<J5V/g, "&lt;J5V")
  .replace(/<\/J5V/g, "&lt;/J5V");
}
