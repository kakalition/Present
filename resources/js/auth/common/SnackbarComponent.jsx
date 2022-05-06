import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { hideSnackbarAnimation, showSnackbarAnimation } from './utils/LoginAnimation';

export default function SnackbarComponent(props) {
  const { shouldAnimate, errorMessage } = props;
  useEffect(() => {
    if (shouldAnimate) showSnackbarAnimation();
    else hideSnackbarAnimation();
  }, [shouldAnimate]);

  const className = 'p-4 w-full bg-error-bg translate-y-4 opacity-0';

  return (
    <div id="snackbar" className={className}>
      <p className="font-ibm-plex-sans text-lg font-medium text-white">{errorMessage}</p>
    </div>
  );
}

SnackbarComponent.propTypes = {
  shouldAnimate: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
