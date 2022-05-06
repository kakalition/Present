/* eslint-disable import/prefer-default-export */
import { cloneElement } from 'react';
import { createRoot } from 'react-dom/client';

export function elementBinder(rootId, jsx) {
  if (document.getElementById(rootId)) {
    const element = document.getElementById(rootId);
    const props = { ...element.dataset };
    const root = cloneElement(jsx, props);

    createRoot(element).render(root);
  }
}
