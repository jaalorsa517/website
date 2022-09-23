import { useRoot } from "@/store/index";

export function init() {
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}
