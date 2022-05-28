import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import SessionHeaderComponent from '../common/SessionHeaderComponent';
import AudioTrackerComponent from './components/AudioTrackerComponent';
import PlayButtonComponent from './components/PlayButtonComponent';

type MeditationData = {
  title: string,
  file_path: string,
};

export default function MeditationPage() {
  const [meditationData, setMeditationData] = useState<MeditationData>({ title: '', file_path: '' });
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioElement = document.getElementById('audio') as HTMLMediaElement;

  useEffect(() => {
    const listener = () => setCurrentTime(audioElement?.currentTime ?? 0);

    audioElement?.addEventListener('timeupdate', listener);
    return () => audioElement?.removeEventListener('timeupdate', listener);
  }, [audioElement]);

  // Initial fetch
  useEffect(() => {
    axios.get('/api/getMeditation')
      .then((value) => {
        setMeditationData({ title: value.data.title, file_path: value.data.file_path });
      });
  }, []);

  const onClick: React.MouseEventHandler = (e) => {
    e.preventDefault();

    if (!currentlyPlaying) {
      audioElement.play();
      setCurrentlyPlaying(true);
    } else {
      audioElement.pause();
      setCurrentlyPlaying(false);
    }
  };

  const audioTrackerElement = (
    <AudioTrackerComponent
      currentDuration={currentTime}
      duration={audioElement?.duration ?? 0}
    />
  );

  return (
    <div
      className="flex w-screen h-screen"
    >
      <div className="absolute w-full h-full bg-center bg-cover brightness-50" style={{ backgroundImage: 'url(assets/forest2.jpg)' }} />
      <div className="flex z-[1] flex-col justify-between items-center p-8 w-full h-full">
        <SessionHeaderComponent title={meditationData?.title ?? ''} />
        <PlayButtonComponent onClick={onClick} isCurrentlyPlaying={currentlyPlaying} />
        <div className="hidden">
          <audio id="audio" key={meditationData.file_path}>
            <source src={`http://localhost/storage/${meditationData.file_path}`} />
          </audio>
        </div>
        {audioTrackerElement}
      </div>
    </div>
  );
}
