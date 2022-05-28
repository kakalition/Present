import React from 'react';
import PauseIcon from '../../../../common-component/icons/PauseIcon';
import PlayIcon from '../../../../common-component/icons/PlayIcon';

export default function PlayButtonComponent({
  onClick, isCurrentlyPlaying,
}: { onClick: React.MouseEventHandler, isCurrentlyPlaying: boolean }) {
  return (
    <button
      className="flex justify-center items-center w-56 h-56 bg-white rounded-full transition-all hover:scale-110"
      type="button"
      onClick={onClick}
    >
      <div className="flex flex-row justify-center items-center w-24 h-24 stroke-black stroke-[2px]">
        <div className={`${isCurrentlyPlaying ? '' : 'w-2'}`} />
        {isCurrentlyPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
    </button>
  );
}
