/* eslint-disable react/jsx-filename-extension */
export const CardWrapper = {
  small: (injectedComponent) => (
    <div className="flex justify-center items-center border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      {injectedComponent}
    </div>
  ),
  medium: (injectedComponent) => (
    <div className="flex justify-center items-center border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      {injectedComponent}
    </div>
  ),
};

export default CardWrapper;