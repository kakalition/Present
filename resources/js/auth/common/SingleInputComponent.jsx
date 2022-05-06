import PropType from 'prop-types';
import { shakeInputAnimation } from './utils/AuthAnimation';

/**
 * @param {{type: string, id: string, label: string,
 * placeholder: string, inlineComponent: JSX.Element}} props
 */
export default function SingleInputComponent(props) {
  const {
    type, id, label, placeholder, isError, inlineComponent,
  } = props;

  let className = 'px-4 w-full h-12 font-ibm-plex-sans text-base bg-slate-100 border-2'
  + ' focus:border-primary-button focus:outline-none md:h-14';

  if (isError) {
    className += ' border-red-500';
    shakeInputAnimation(id);
  } else {
    className += ' border-x-transparent border-t-transparent border-b-slate-400';
  }

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <label
          htmlFor={id}
          className="font-ibm-plex-sans text-base text-black
          md:text-lg"
        >
          {label}
        </label>

        {inlineComponent}
      </div>

      <div className="h-2" />

      <input
        className={className}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required
      />
      <br />
    </>
  );
}

SingleInputComponent.propTypes = {
  type: PropType.string.isRequired,
  id: PropType.string.isRequired,
  label: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  isError: PropType.bool,
  inlineComponent: PropType.element,
};

SingleInputComponent.defaultProps = {
  isError: false,
  inlineComponent: <div />,
};
