import { logEvent } from "firebase/analytics";
import { useFirebaseStore } from "@/plugins/store/firebaseStore";

function getInstanceGA() {
  const firebaseStore = useFirebaseStore();
  return firebaseStore.analyticsInstance;
}

export function selectContent(origin, name) {
  const gaInstance = getInstanceGA();
  if (!gaInstance) return;
  logEvent(gaInstance, "select_content", {
    content_type: origin,
    content_id: name,
  });
}
