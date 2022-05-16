import PropTypes from 'prop-types';
import XIcon from '../../../common-component/icons/XIcon';

export default function NewMeditationModalComponent() {
  return (
    <div className="flex z-20 flex-col items-start w-1/2 h-2/3 bg-white">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="p-6 font-ibm-plex-sans text-3xl text-black">Add New Meditation</h2>
        <button className="p-4 m-2 w-16 h-16 stroke-black stroke-1" type="button" aria-label="close modal"><XIcon /></button>
      </div>
    </div>
  );
}

NewMeditationModalComponent.propTypes = {
};
