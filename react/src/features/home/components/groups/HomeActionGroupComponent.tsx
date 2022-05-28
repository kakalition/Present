import React from 'react';
import AddButtonComponent from '../AddButtonComponent';
import SearchBarComponent from '../SearchBarComponent';

type Props = {
  onMeditationClick: () => void,
  onBreathingClick: () => void,
  onTextChange: React.ChangeEventHandler,
};

export default function HomeActionGroupComponent({
  onMeditationClick, onBreathingClick, onTextChange,
}: Props) {
  return (
    <div className="flex flex-row items-center px-24 w-full h-16">
      <div className="basis-[60%] h-full"><SearchBarComponent onTextChange={onTextChange} /></div>
      <div className="w-8" />
      <div className="basis-[18%] h-full">
        <AddButtonComponent text="New Meditation" background="bg-gradient-to-bl from-blue-700 to-sky-400" onClickCallback={onMeditationClick} fillSpace />
      </div>
      <div className="w-8" />
      <div className="basis-[22%] h-full">
        <AddButtonComponent text="New Breathing Exercise" background="bg-gradient-to-bl from-orange-600 to-orange-300" onClickCallback={onBreathingClick} fillSpace />
      </div>
    </div>
  );
}

HomeActionGroupComponent.propTypes = {
};
