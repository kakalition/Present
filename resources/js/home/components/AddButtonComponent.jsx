import PropTypes from 'prop-types';
import PlusIcon from '../../common-component/icons/PlusIcon';

/**
 * @param {{background: TailwindClass, text: string, clickCallback: () => void}} props
 */
export default function AddButtonComponent(props) {
  const {
    background, text, clickCallback, fillSpace,
  } = props;

  let className = `flex items-center justify-between shadow-md hover:shadow-xl scale-1 hover:scale-[1.005] transition p-6 ${background}`;
  if (fillSpace) {
    className += ' w-full h-full';
  }

  return (
    <button className={className} type="button" onClick={clickCallback}>
      <p className="font-ibm-plex-sans text-2xl font-semibold text-white transition">{text}</p>
      <div className="w-8 h-8 stroke-white stroke-2"><PlusIcon /></div>
    </button>
  );
}

AddButtonComponent.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickCallback: PropTypes.func.isRequired,
  fillSpace: PropTypes.bool,
};

AddButtonComponent.defaultProps = {
  fillSpace: false,
};
