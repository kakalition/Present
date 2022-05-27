import React from 'react';
import PlayIcon from '../../../../common-component/icons/PlayIcon';

export default function PlayButtonComponent({
  onClick,
}: { onClick: React.MouseEventHandler }) {
  return (
    <button
      className="flex justify-center items-center w-56 h-56 bg-white rounded-full transition-all hover:scale-110"
      type="button"
      onClick={onClick}
    >
      <div className="flex flex-row justify-center items-center w-24 h-24 stroke-black stroke-[2px]">
        <div className="w-2" />
        <PlayIcon />
      </div>
    </button>
  );
}
