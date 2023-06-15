import * as intro from "@/assets/resources/language/Home/intro.language";
import * as carousel from "@/assets/resources/language/Home/carousel.language";
import * as components from "@/assets/resources/language/Components/intro.language";

function getLanguage(language) {
  const languageNav = window.navigator.language.split("-")[0] || "es";
  return language[languageNav] || {};
}

export const Intro = getLanguage(intro);
export const Carousel = getLanguage(carousel);
export const Components = getLanguage(components);
