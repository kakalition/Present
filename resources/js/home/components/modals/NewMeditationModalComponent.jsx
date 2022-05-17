import PropTypes from 'prop-types';
import { useState } from 'react';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';
import XIcon from '../../../common-component/icons/XIcon';
import SingleInputComponent from '../../../common-component/SingleInputComponent';

function FormTextArea() {
  return (
    <label htmlFor="description" className="flex flex-col items-start font-ibm-plex-sans text-base text-black md:text-lg">
      Description
      <div className="h-2" />
      <textarea
        className="p-4 w-full font-ibm-plex-sans text-base bg-slate-100 border-2 focus:border-primary-button border-x-transparent border-t-transparent border-b-slate-400 focus:outline-none resize-none"
        id="description"
        name="description"
        rows={4}
      />
    </label>
  );
}

function FileInput(props) {
  const { onFileChange } = props;

  return (
    <label htmlFor="file" className="flex flex-col items-start py-2 pr-12 pl-4 font-ibm-plex-sans text-lg font-medium text-white bg-primary-button cursor-pointer">
      Upload file
      <input className="hidden" type="file" id="file" name="file" onChange={onFileChange} required />
    </label>
  );
}

export default function NewMeditationModalComponent() {
  const [fileName, setFileName] = useState('');

  function onFileChange(dom) {
    if (dom === null) return;

    if (dom.files.length !== 0) {
      setFileName(dom.files[0].name);
    }
  }

  return (
    <div className="flex z-20 flex-col items-start w-1/2 bg-white">
      <div className="p-6 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="font-ibm-plex-sans text-3xl text-black">Add New Meditation</h2>
          <button className="w-10 h-10 stroke-black stroke-1" type="button" aria-label="close modal"><XIcon /></button>
        </div>
        <div className="h-8" />
        <form className="w-full h-fit">
          <SingleInputComponent id="title" label="Title" placeholder="Stress Relief Meditation" type="text" />
          <div className="h-4" />
          <FormTextArea />
          <div className="h-6" />
          <p className="flex flex-col items-start font-ibm-plex-sans text-lg font-medium text-black">Upload file</p>
          <p className="flex flex-col items-start font-ibm-plex-sans text-lg text-black">Max file size is 10 MB. Supported file types are .mp3, .aac, and .flac.</p>
          <div className="h-2" />
          <div className="w-fit">
            <FileInput onFileChange={() => onFileChange(document.getElementById('file'))} />
          </div>
          <div className="h-2" />
          <div className={`${fileName === '' ? '' : 'p-2 bg-slate-200'}`}>
            <p>{fileName}</p>
          </div>

        </form>
      </div>

      <div className="flex flex-row w-full h-16">
        <div className="w-1/2 h-full"><CommonButtonComponent buttonType="secondary" text="Cancel" padding="px-6" textSize="text-lg" fillSpace /></div>
        <div className="w-1/2 h-full"><CommonButtonComponent buttonType="primary" text="Submit" padding="px-6" textSize="text-lg" fillSpace /></div>
      </div>
    </div>
  );
}

NewMeditationModalComponent.propTypes = {
};
