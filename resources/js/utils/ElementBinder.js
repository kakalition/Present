import { cloneElement } from "react";
import { createRoot } from "react-dom/client";

export function elementBinder(rootId, jsx) {
    if (document.getElementById(rootId)) {
        const element = document.getElementById(rootId);
        const props = Object.assign({}, element.dataset);
        const root = cloneElement(jsx, props);

        createRoot(element).render(root);
    }
}
