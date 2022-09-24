import { useRoot } from "@/store/index";
import { j5JsonTransform } from "@jaalorsa/j5-components";

export function init() {
  j5JsonTransform();
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}
