import PropTypes from 'prop-types';
import CheckIcon from '../../../../../common-component/icons/CheckIcon';

export default function SingleFormStepperComponent(props) {
  const { description, status } = props;

  const getStatusComponent = (stepperStatus) => {
    switch (stepperStatus) {
      case 'current': {
        return <div className="w-5 h-5 rounded-full bg-primary-button" />;
      }
      case 'filled': {
        return <div className="flex justify-center items-center w-5 h-5 rounded-full border-2 stroke-[3px] border-primary-button stroke-primary-button"><CheckIcon /></div>;
      }
      case 'untouched': {
        return <div className="w-5 h-5 rounded-full border-2 border-slate-400" />;
      }
      case 'error': {
        return <div className="w-5 h-5 rounded-full border-2 border-error-bg" />;
      }
      default: {
        return <div />;
      }
    }
  };

  const getStatusLineComponent = (stepperStatus) => {
    switch (stepperStatus) {
      case 'current': {
        return <div className="w-full h-1 bg-primary-button" />;
      }
      case 'filled': {
        return <div className="w-full h-1 bg-primary-button" />;
      }
      case 'untouched': {
        return <div className="w-full h-1 bg-slate-400" />;
      }
      case 'error': {
        return <div className="w-full h-1 bg-error-bg" />;
      }
      default: {
        return <div />;
      }
    }
  };

  return (
    <div className="flex flex-col items-start w-full">
      {getStatusLineComponent(status)}
      <div className="h-2" />
      <div className="flex flex-row items-center">
        {getStatusComponent(status)}
        <div className="w-2" />
        <p className="text-base font-ibm-plex-sans">{description}</p>
      </div>
    </div>
  );
}

SingleFormStepperComponent.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['current', 'filled', 'untouched']).isRequired,
};
