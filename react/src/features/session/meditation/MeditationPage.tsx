import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import SessionHeaderComponent from '../common/SessionHeaderComponent';
import AudioTrackerComponent from './components/AudioTrackerComponent';
import PlayButtonComponent from './components/PlayButtonComponent';

type MeditationData = {
  title: string,
  file_path: string,
};

export default function MeditationPage() {
  const [meditationData, setMeditationData] = useState<MeditationData>({ title: '', file_path: '' });

  // Initial fetch
  useEffect(() => {
    axios.get('/api/getMeditation')
      .then((value) => {
        setMeditationData({ title: value.data.title, file_path: value.data.file_path });
      });
  }, []);

  return (
    <div
      className="flex w-screen h-screen"
    >
      <div className="absolute w-full h-full bg-center bg-cover brightness-50" style={{ backgroundImage: 'url(assets/forest2.jpg)' }} />
      <div className="flex z-[1] flex-col justify-between items-center p-8 w-full h-full">
        <SessionHeaderComponent title={meditationData?.title ?? ''} />
        <PlayButtonComponent />
        <audio controls key={meditationData.file_path}>
          <source src={`http://localhost/storage/${meditationData.file_path}`} />
        </audio>
        <AudioTrackerComponent />
      </div>
    </div>
  );
}
