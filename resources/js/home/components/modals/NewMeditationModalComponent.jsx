import PropTypes from 'prop-types';
import XIcon from '../../../common-component/icons/XIcon';

export default function NewMeditationModalComponent() {
  return (
    <div className="flex z-20 flex-col items-start p-6 w-1/2 h-2/3 bg-white">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="font-ibm-plex-sans text-3xl text-black">Add New Meditation</h2>
        <button className="w-10 h-10 stroke-black stroke-1" type="button" aria-label="close modal"><XIcon /></button>
      </div>
      <div className="h-4" />
    </div>
  );
}

NewMeditationModalComponent.propTypes = {
};
