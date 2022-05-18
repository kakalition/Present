import PropTypes from 'prop-types';
import PlusIcon from '../../common-component/icons/PlusIcon';

/**
 * @param {{background: TailwindClass, text: string, onClickCallback: () => void}} props
 */
export default function AddButtonComponent(props) {
  const {
    background, text, onClickCallback, fillSpace,
  } = props;

  let className = `flex items-center justify-between shadow-md hover:shadow-xl scale-1 hover:scale-[1.005] transition px-6 py-5 ${background}`;
  if (fillSpace) {
    className += ' w-full h-full';
  }

  return (
    <button className={className} type="button" onClick={onClickCallback}>
      <p className="font-ibm-plex-sans text-xl font-medium text-white transition">{text}</p>
      <div className="w-8 h-8 stroke-white stroke-2"><PlusIcon /></div>
    </button>
  );
}

AddButtonComponent.propTypes = {
  background: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  fillSpace: PropTypes.bool,
};

AddButtonComponent.defaultProps = {
  fillSpace: false,
};
