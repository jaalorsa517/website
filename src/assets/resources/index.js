import * as intro from "@/assets/resources/intro.language";

function getLanguage(language) {
  const languageNav = window.navigator.language.split("-")[0] || "es";
  return language[languageNav] || {};
}

export const Intro = getLanguage(intro);
