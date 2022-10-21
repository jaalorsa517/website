import { useRoot } from "@/store/index";
import { j5JsonTransform, j5Carousel } from "@jaalorsa/j5-components";

export function init() {
  j5JsonTransform();
  j5Carousel();
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}
