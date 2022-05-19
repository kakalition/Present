import PropTypes from 'prop-types';

export default function FileInputComponent(props) {
  const { onFileChange } = props;

  return (
    <label htmlFor="file" className="flex flex-col items-start py-2 pr-12 pl-4 text-lg font-medium text-white cursor-pointer font-ibm-plex-sans bg-primary-button">
      Upload file
      <input className="hidden" type="file" id="file" name="file" onChange={onFileChange} required />
    </label>
  );
}

FileInputComponent.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};
