/* eslint-disable react/jsx-filename-extension */

import { useState } from 'react';
import { v4 } from 'uuid';
import usePopupAddon from './hooks/usePopupAddon';

/**
 * @param {(animationCallback) => JSX.Component} mainComponent
 * @param {() => JSX.Component} popupComponent
 * @param {TailwindClass} fromY
 * @param {TailwindClass} toY
 */
export default function ComponentWithPopupBuilder(mainComponent, popupComponent, fromY, toY) {
  const [id] = useState(v4());
  const [animationCallback, popupClass] = usePopupAddon(id, fromY, toY);

  return (
    <div className="flex relative flex-col items-start">
      {mainComponent(animationCallback)}
      <div id={id} className={popupClass}>
        {popupComponent()}
      </div>
    </div>
  );
}
