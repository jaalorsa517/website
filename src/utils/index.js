import { useRoot } from "@/store/index";
import { j5JsonTransform, j5Carousel, j5MenuHamburguer, j5Toggle, j5Tooltip, j5Collapse } from "@jaalorsa/j5-components";

export function init() {
  j5JsonTransform();
  j5Carousel();
  j5MenuHamburguer();
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}
