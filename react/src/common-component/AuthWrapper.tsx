import React, { useMemo } from 'react';

interface Props {
  user: unknown,
  child: React.FunctionComponent
}

export default function AuthWrapper(props: Props) {
  const { user, child } = props;

  const loadingElement = useMemo(() => (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-900">
      <span className="flex relative w-20 h-20">
        <span className="absolute w-full h-full bg-sky-400 rounded-full opacity-75 animate-ping" />
        <span className="relative w-20 h-20 bg-sky-500 rounded-full" />
      </span>
    </div>
  ), []);

  return user === {} ? loadingElement : child;
}
