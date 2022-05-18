/* eslint-disable import/prefer-default-export */
export const ClassComposer = (initialClass, ...args) => args.reduce((previous, current) => `${previous} ${current}`, initialClass);
