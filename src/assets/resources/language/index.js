import * as intro from "@/assets/resources/language/Home/intro.language";
import * as carousel from "@/assets/resources/language/Home/carousel.language";
import * as components from "@/assets/resources/language/Components/intro.language";
import * as routes from "@/assets/resources/language/Routes"

function getLanguage(language) {
  const languageNav = window.navigator.language.split("-")[0] || "es";
  return language[languageNav] || {};
}

export const Intro = getLanguage(intro);
export const Carousel = getLanguage(carousel);
export const Components = getLanguage(components);
export const RoutesName = getLanguage(routes);
