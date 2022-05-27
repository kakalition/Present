import axios from 'axios';
import React, { MouseEventHandler, useState } from 'react';
import CommonButtonComponent from '../../../../common-component/CommonButtonComponent';
import XIcon from '../../../../common-component/icons/XIcon';
import SingleInputComponent from '../../../../common-component/SingleInputComponent';
import FileInputComponent from './common/FileInputComponent';
import FormTextAreaComponent from './common/FormTextAreaComponent';

export default function NewMeditationModalComponent({
  onCancelClick,
}: { onCancelClick: () => void }) {
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.currentTarget;

    if (target.files === null) return;
    if (target.files.length !== 0) {
      setFileName(target.files[0].name);
      setFileSize(target.files[0].size);
    }
  }

  const cancelClickListener: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent) => {
    e.preventDefault();
    (document.getElementById('new-meditation-form') as HTMLFormElement).reset();
    onCancelClick();
  };

  const onSubmitMeditation: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('new-meditation-form') as HTMLFormElement);
    axios
      .post('/api/newMeditation', formData)
      .then((value) => {
        if (value.status === 200 || value.status === 201) {
          onCancelClick();
        } else console.log(value);
      });
  };

  return (
    <div className="flex z-20 flex-col items-start w-1/2 bg-white">
      <div className="p-6 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="text-3xl text-black font-ibm-plex-sans">Add New Meditation</h2>
          <button
            aria-label="close modal"
            className="w-10 h-10 stroke-black stroke-1"
            type="button"
            onClick={cancelClickListener}
          >
            <XIcon />
          </button>
        </div>
        <div className="h-8" />
        <form id="new-meditation-form" className="w-full h-fit">
          <SingleInputComponent id="title" label="Title" placeholder="Stress Relief Meditation" inputType="text" />
          <div className="h-4" />
          <FormTextAreaComponent id="description" placeholder="A soothing meditation.." />
          <div className="h-6" />
          <p className="flex flex-col items-start text-lg font-medium text-black font-ibm-plex-sans">Upload file</p>
          <p className="flex flex-col items-start text-lg text-black font-ibm-plex-sans">Max file size is 10 MB. Supported file types are .mp3, .aac, and .flac.</p>
          <div className="h-2" />
          <div className="w-fit">
            <FileInputComponent
              onFileChange={(e) => onFileChange(e)}
            />
          </div>
          <div className="h-2" />
          <div className={`${fileName === '' || fileSize === 0 ? 'hidden' : 'p-2 bg-slate-200 flex flex-row items-center justify-between w-full'}`}>
            <p>{fileName}</p>
            <p>{`${(fileSize / 1000000).toPrecision(2)} MB`}</p>
          </div>
        </form>
      </div>

      <div className="flex flex-row w-full h-16">
        <div className="w-1/2 h-full">
          <CommonButtonComponent
            onClickCallback={cancelClickListener}
            buttonType="secondary"
            text="Cancel"
            padding="px-6"
            textSize="text-lg"
            fillSpace
          />
        </div>
        <div className="w-1/2 h-full">
          <CommonButtonComponent
            onClickCallback={onSubmitMeditation}
            buttonType="primary"
            text="Submit"
            padding="px-6"
            textSize="text-lg"
            fillSpace
          />
        </div>
      </div>
    </div>
  );
}
