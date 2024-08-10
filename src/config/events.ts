import { useRoot } from "@/plugins/store";

export function initEvents() {
  window.addEventListener("resize", () => {
    useRoot().$patch({ isMobile: window.innerWidth < 768 });
  });
}
