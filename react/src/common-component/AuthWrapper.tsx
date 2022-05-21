import { useMemo } from 'react';

interface Props {
  user: any,
  child: JSX.Element,
}

export default function AuthWrapper({ user, child }: Props): JSX.Element {
  const loadingElement = useMemo(() => (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-900">
      <span className="flex relative w-20 h-20">
        <span className="absolute w-full h-full bg-sky-400 rounded-full opacity-75 animate-ping" />
        <span className="relative w-20 h-20 bg-sky-500 rounded-full" />
      </span>
    </div>
  ), []);

  return JSON.stringify(user) === JSON.stringify({}) ? loadingElement : child;
}
