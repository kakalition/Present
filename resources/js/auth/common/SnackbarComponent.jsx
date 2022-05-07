import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { showSnackbarAnimation } from './utils/AuthAnimation';

function showSnackbar() {
  const val = window.matchMedia('(min-width: 768px)').matches;
  if (val) showSnackbarAnimation('1rem');
  else showSnackbarAnimation('-1rem');
}

export default function SnackbarComponent(props) {
  const { shouldAnimate, errorMessage } = props;
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

SnackbarComponent.propTypes = {
  shouldAnimate: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
