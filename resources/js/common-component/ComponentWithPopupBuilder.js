/* eslint-disable react/jsx-filename-extension */

import usePopupAddon from './hooks/usePopupAddon';

/**
 * @typedef {object} ComponentWithPopupParams
 * @property {string} id
 * @property {(animationCallback) => JSX.Component} mainComponent
 * @property {() => JSX.Component} popupComponent
 * @property {TailwindClass} alignClass
 * @property {TailwindClass} fromY
 * @property {TailwindClass} toY
 */

/**
 * @param {ComponentWithPopupParams} params
 */
export default function ComponentWithPopupBuilder(params) {
  const {
    mainComponent, popupComponent, alignClass, fromY, toY, id,
  } = params;
  const [animationCallback, popupClass] = usePopupAddon(id, fromY, toY);

  return (
    <div className={`flex relative flex-col ${alignClass}`}>
      {mainComponent(animationCallback)}
      <div id={id} className={popupClass}>
        {popupComponent()}
      </div>
    </div>
  );
}

/**
 * @param {{mainComponent: (animationCallback) => JSX.Component,
 * popupComponent: () => JSX.Component, alignClass: TailwindClass
 * fromY: TailwindClass, toY: TailwindClass, id: string
 * }} objec
 */
