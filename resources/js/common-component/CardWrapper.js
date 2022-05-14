/* eslint-disable react/jsx-filename-extension */
const CardWrapper = {
  /**
   * @param {JSX.Element} injectedComponent
   */
  small: (injectedComponent) => (
    <div className="flex justify-center items-center border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      {injectedComponent}
    </div>
  ),

  /**
   * @param {JSX.Element} injectedComponent
   */
  medium: (injectedComponent) => (
    <div className="flex justify-center items-center border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      {injectedComponent}
    </div>
  ),
};

export default CardWrapper;
