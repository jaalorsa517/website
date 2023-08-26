import * as routes from "@/assets/resources/language/Routes";

import * as viewHome from "@/assets/resources/language/Home/intro.language";

import * as viewComponentsIntro from "@/assets/resources/language/Components/intro.language";
import * as viewComponentsCarousel from "@/assets/resources/language/Components/carousel.language";
import * as viewComponentsCollapse from "@/assets/resources/language/Components/collapse.language";

import * as componentCarousel from "@/assets/resources/language/Home/carousel.language";

function getLanguage(language) {
  const languageNav = window.navigator.language.split("-")[0] || "es";
  return language[languageNav] || {};
}

export const RoutesName = getLanguage(routes);

export const ViewHome = {
  intro: getLanguage(viewHome),
};

export const ViewLibComponents = {
  intro: getLanguage(viewComponentsIntro),
  carousel: getLanguage(viewComponentsCarousel),
  collapse: getLanguage(viewComponentsCollapse)
};

export const Components = {
  carousel: getLanguage(componentCarousel),
};
