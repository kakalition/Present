import { useEffect } from 'react';

export default function AudioTracker({
  currentDuration, duration,
}: { currentDuration: number, duration: number }) {
  const roundedCurrentDuration = Math.round(currentDuration);
  const filledWidth = `${(currentDuration / duration) * 100}%`;

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-2">
        <div className="absolute w-full h-full bg-slate-600 rounded-full" />
        <div
          className="absolute z-[1] h-full bg-white rounded-full"
          style={{ width: filledWidth }}
        />
      </div>
      <div className="h-4" />
      <div className="flex flex-row justify-between items-center w-full h-2">
        <p className="text-lg font-semibold text-white font-poppins">
          {`${(Math.floor(roundedCurrentDuration / 60)).toString().padStart(2, '0')}:${(roundedCurrentDuration % 60).toString().padStart(2, '0')}`}
        </p>
        <p className="text-lg font-semibold text-white font-poppins">
          {`${Math.floor(duration / 60).toString().padStart(2, '0')}:${Math.floor(duration % 60).toString().padStart(2, '0')}`}
        </p>
      </div>
    </div>
  );
}
