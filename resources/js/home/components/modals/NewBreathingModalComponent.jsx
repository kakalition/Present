import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';
import XIcon from '../../../common-component/icons/XIcon';
import SingleInputComponent from '../../../common-component/SingleInputComponent';
import SingleSliderComponent from '../../../common-component/SingleSliderComponent';
import FormTextAreaComponent from './common/FormTextAreaComponent';
import SingleFormStepperComponent from './common/SingleFormStepperComponent';

export default function NewBreathingModalComponent(props) {
  const { onCancel } = props;
  const [pointer, setPointer] = useState(0);

  const [descriptionStatus, setDescriptionStatus] = useState('current');
  const [intervalStatus, setIntervalStatus] = useState('untouched');

  const primaryAction = useMemo(() => {
    switch (pointer) {
      case 0: return () => {
        setPointer(1);
        setDescriptionStatus('filled');
        setIntervalStatus('current');
      };
      case 1: return () => {
        const element = document.getElementById('test-form');
        const form = new FormData(element);
        console.log(form);
      };
      default: return () => {};
    }
  });

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
      default: return () => {};
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
          <h2 className="font-ibm-plex-sans text-3xl text-black">Add New Breathing Exercise</h2>
          <button className="w-10 h-10 stroke-black stroke-1" type="button" aria-label="close modal"><XIcon /></button>
        </div>
        <div className="h-8" />

        <div className="flex flex-row w-full">
          <SingleFormStepperComponent description="Description" status={descriptionStatus} />
          <SingleFormStepperComponent description="Interval" status={intervalStatus} />
        </div>
        <div className="h-8" />

        <form className="w-full h-fit" id="test-form">
          <div id="description" className={`${pointer === 0 ? 'block' : 'hidden'}`}>
            <SingleInputComponent id="title" label="Title" placeholder="Stress Relief Meditation" type="text" />
            <div className="h-4" />
            <FormTextAreaComponent />
          </div>

          <div id="interval" className={`${pointer === 1 ? 'block' : 'hidden'}`}>
            <SingleSliderComponent id="repetition" label="Interval repetition (times)" />
            <div className="h-4" />
            <SingleSliderComponent id="inhale" label="Inhale duration (secs)" />
            <div className="h-4" />
            <SingleSliderComponent id="holdinhale" label="Hold after inhale duration (secs)" />
            <div className="h-4" />
            <SingleSliderComponent id="exhale" label="Exhale duration (secs)" />
            <div className="h-4" />
            <SingleSliderComponent id="holdexhale" label="Hold after exhale duration (secs)" />
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
