import { useEffect } from 'react';
import CommonAnimation from '../utils/animations/CommonAnimation';

type Props = { shouldAnimate: boolean, errorMessage: string }

function showSnackbar() {
  const val = window.matchMedia('(min-width: 768px)').matches;
  if (val) CommonAnimation.showSnackbarAnimation('1rem');
  else CommonAnimation.showSnackbarAnimation('-1rem');
}
export default function SnackbarComponent({ shouldAnimate, errorMessage }: Props) {
  useEffect(() => {
    if (shouldAnimate) showSnackbar();
  }, [shouldAnimate]);

  const className = 'p-4 w-full bg-error-bg opacity-0';

  return (
    <div id="snackbar" className={className}>
      <p className="font-ibm-plex-sans text-lg font-medium text-white">{errorMessage}</p>
    </div>
  );
}
