import PlayIcon from '../../../common-component/icons/PlayIcon';
import SessionHeaderComponent from '../common/SessionHeaderComponent';

function AudioTracker() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-2 relative">
        <div className="w-full h-full absolute bg-slate-600 rounded-full" />
        <div className="w-1/2 h-full absolute bg-white z-[1] rounded-full" />
      </div>
      <div className="h-4" />
      <div className="w-full h-2 flex flex-row justify-between items-center">
        <p className="text-white font-poppins text-lg font-semibold">06:12</p>
        <p className="text-white font-poppins text-lg font-semibold">12:00</p>
      </div>
    </div>
  );
}

function PlayButton() {
  return (
    <div className="h-56 w-56 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all">
      <div className="h-24 w-24 stroke-black stroke-[2px] flex flex-row items-center justify-center">
        <div className="w-2" />
        <PlayIcon />
      </div>
    </div>
  );
}

export default function MeditationPage() {
  return (
    <div
      className="h-screen w-screen flex"
    >
      <div className="absolute h-full w-full brightness-50 bg-cover bg-center" style={{ backgroundImage: 'url(assets/forest2.jpg)' }} />
      <div className="h-full w-full z-[1] p-8 flex flex-col items-center justify-between">
        <SessionHeaderComponent />
        <PlayButton />
        <AudioTracker />
      </div>
    </div>
  );
}
