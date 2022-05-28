import axios from 'axios';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import CommonButtonComponent from '../../../../common-component/CommonButtonComponent';
import XIcon from '../../../../common-component/icons/XIcon';
import SingleInputComponent from '../../../../common-component/SingleInputComponent';
import SingleSliderComponent from '../../../../common-component/SingleSliderComponent';
import { FormStepperStatus } from '../../typedef/FormStepperStatus';
import FormTextAreaComponent from './common/FormTextAreaComponent';
import SingleFormStepperComponent from './common/SingleFormStepperComponent';

export default function NewBreathingModalComponent({ onCancel }: { onCancel: () => void }) {
  const [pointer, setPointer] = useState<number>(0);

  const [descriptionStatus, setDescriptionStatus] = useState<string>('current');
  const [intervalStatus, setIntervalStatus] = useState<string>('untouched');

  const primaryAction = useMemo(() => {
    switch (pointer) {
      case 0: return () => {
        setPointer(1);

        const title = (document.getElementById('title') as HTMLInputElement)?.value;
        const description = (document.getElementById('description') as HTMLInputElement)?.value;
        if (title === '' || description === '') {
          setDescriptionStatus('error');
        } else setDescriptionStatus('filled');
        setIntervalStatus('current');
      };
      case 1: return () => {
        const element = document.getElementById('test-form') as HTMLFormElement;
        const form = new FormData(element);
        axios.post('/api/newBreath', form).then(() => onCancel());
      };
      default: return () => { };
    }
  }, [pointer]);

  const primaryText = useMemo(() => {
    switch (pointer) {
      case 0: return 'Proceed to interval';
      case 1: return 'Submit';
      default: return '';
    }
  }, [pointer]);

  const secondaryAction = useMemo(() => {
    switch (pointer) {
      case 0: return () => onCancel();
      case 1: return () => {
        setPointer(0);
        setDescriptionStatus('current');
        setIntervalStatus('filled');
      };
      default: return () => { };
    }
  }, [pointer]);

  const secondaryText = useMemo(() => {
    switch (pointer) {
      case 0: return 'Cancel';
      case 1: return 'Back to description';
      default: return '';
    }
  }, [pointer]);

  return (
    <div className="flex z-20 flex-col items-start w-1/2 bg-white">
      <div className="p-6 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="text-3xl text-black font-ibm-plex-sans">Add New Breathing Exercise</h2>
          <button className="w-10 h-10 stroke-black stroke-1" type="button" aria-label="close modal"><XIcon /></button>
        </div>
        <div className="h-8" />

        <div className="flex flex-row w-full">
          <SingleFormStepperComponent description="Description" status={descriptionStatus as FormStepperStatus} />
          <SingleFormStepperComponent description="Interval" status={intervalStatus as FormStepperStatus} />
        </div>
        <div className="h-8" />

        <form className="w-full h-fit" id="test-form">
          <div id="desc" className={`${pointer === 0 ? 'block' : 'hidden'}`}>
            <SingleInputComponent id="title" label="Title" placeholder="Stress Relief Meditation" inputType="text" />
            <div className="h-4" />
            <FormTextAreaComponent id="description" />
          </div>

          <div id="interval" className={`${pointer === 1 ? 'block' : 'hidden'}`}>
            <SingleSliderComponent id="repetition" label="Interval repetition (times)" />
            <div className="h-4" />
            <SingleSliderComponent id="inhale" label="Inhale duration (secs)" />
            <div className="h-4" />
            <SingleSliderComponent id="holdInhale" label="Hold after inhale duration (secs)" />
            <div className="h-4" />
            <SingleSliderComponent id="exhale" label="Exhale duration (secs)" />
            <div className="h-4" />
            <SingleSliderComponent id="holdExhale" label="Hold after exhale duration (secs)" />
          </div>
        </form>
        <div className="h-8" />
      </div>

      <div className="flex flex-row w-full h-16">
        <div className="w-1/2 h-full"><CommonButtonComponent buttonType="secondary" text={secondaryText} padding="px-6" textSize="text-lg" onClickCallback={secondaryAction} fillSpace /></div>
        <div className="w-1/2 h-full"><CommonButtonComponent buttonType="primary" text={primaryText} padding="px-6" textSize="text-lg" onClickCallback={primaryAction} fillSpace /></div>
      </div>
    </div>
  );
}

NewBreathingModalComponent.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
