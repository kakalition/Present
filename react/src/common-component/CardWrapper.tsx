import { ReactElement } from 'react';

const CardWrapper = {
  small: (injectedComponent: ReactElement): ReactElement => (
    <div className="flex justify-center items-center border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      {injectedComponent}
    </div>
  ),

  medium: (injectedComponent: ReactElement): ReactElement => (
    <div className="flex justify-center items-center border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      {injectedComponent}
    </div>
  ),
};

export default CardWrapper;
