import SessionHeaderComponent from '../common/SessionHeaderComponent';
import AudioTrackerComponent from './components/AudioTrackerComponent';
import PlayButtonComponent from './components/PlayButtonComponent';

export default function MeditationPage() {
  return (
    <div
      className="h-screen w-screen flex"
    >
      <div className="absolute h-full w-full brightness-50 bg-cover bg-center" style={{ backgroundImage: 'url(assets/forest2.jpg)' }} />
      <div className="h-full w-full z-[1] p-8 flex flex-col items-center justify-between">
        <SessionHeaderComponent />
        <PlayButtonComponent />
        <AudioTrackerComponent />
      </div>
    </div>
  );
}
