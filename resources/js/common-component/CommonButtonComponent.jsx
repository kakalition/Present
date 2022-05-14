import PropTypes from 'prop-types';
import { ClassComposer } from '../utils/ClassComposer';

/**
 * @param {{buttonType: "primary" | "secondary" | "tertiary" | "ghost" | "white-tertiary",
 * textSize: TailwindClass_, padding: TailwindClass_, text: string, onClickCallback: () => void,
 * icon: svg, fillSpace: boolean}} props
 */
export default function CommonButtonComponent(props) {
  const {
    buttonType, textSize, padding, text, onClickCallback, icon, fillSpace, fillX
  } = props;

  let className = 'text-left';

  if (fillSpace) {
    className += ' h-full w-full';
  }

  if (fillX) {
    className += ' w-full';
  }

  switch (buttonType) {
    case 'primary': {
      className = ClassComposer(
        className,
        textSize,
        padding,
        'whitespace-nowrap',
        'bg-primary-button',
        'text-white',
        'font-semibold',
        'font-ibm-plex-sans',
        'hover:brightness-[90%]',
        'transition-all',
        'duration-100',
      );
      break;
    }

    case 'secondary': {
      className = ClassComposer(
        className,
        textSize,
        'whitespace-nowrap',
        'bg-secondary-button',
        'text-white',
        'font-ibm-plex-sans',
        'hover:brightness-[90%]',
        'transition-all',
        'duration-100',
      );
      break;
    }

    case 'tertiary': {
      className = ClassComposer(
        className,
        textSize,
        padding,
        'whitespace-nowrap',
        'border-2 border-primary-button',
        'text-primary-button',
        'font-ibm-plex-sans',
        'hover:brightness-[90%]',
        'hover:text-white',
        'hover:bg-primary-button',
        'transition-all',
        'duration-100',
      );
      break;
    }

    case 'white-tertiary': {
      className = ClassComposer(
        className,
        textSize,
        padding,
        'whitespace-nowrap',
        'border-2 border-white',
        'text-white',
        'font-ibm-plex-sans',
        'hover:text-black',
        'hover:bg-white',
        'transition-all',
        'duration-100',
      );
      break;
    }

    case 'ghost': {
      className = ClassComposer(
        className,
        textSize,
        padding,
        'whitespace-nowrap',
        'text-primary-button',
        'font-ibm-plex-sans',
        'transition-all',
        'duration-100',
        'hover:bg-slate-200',
      );
      break;
    }

    // no default
  }

  return (
    <button
      className={className}
      type="button"
      onClick={onClickCallback}
    >
      <div className="flex justify-between items-center">
        {text}
        {icon}
      </div>
    </button>
  );
}

CommonButtonComponent.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'white-tertiary', 'ghost']).isRequired,
  textSize: PropTypes.string,
  padding: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  icon: PropTypes.element,
  fillSpace: PropTypes.bool,
  fillX: PropTypes.bool,
};

CommonButtonComponent.defaultProps = {
  textSize: 'lg:text-xl text-lg',
  padding: 'lg:p-3 lg:pr-12 md:pr-8 p-2 pr-8',
  icon: <div />,
  fillSpace: false,
  fillX: false,
};
