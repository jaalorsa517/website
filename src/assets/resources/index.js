import * as intro from "@/assets/resources/Home/intro.language";
import * as carousel from "@/assets/resources/Home/carousel.language";

function getLanguage(language) {
  const languageNav = window.navigator.language.split("-")[0] || "es";
  return language[languageNav] || {};
}

export const Intro = getLanguage(intro);
export const Carousel = getLanguage(carousel);
