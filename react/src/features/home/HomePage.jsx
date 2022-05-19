import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import UIShellComponent from '../../common-component/UIShellComponent';
import HomeActionGroupComponent from './components/groups/HomeActionGroupComponent';
import FilterGroupComponent from './components/groups/FilterGroupComponent';
import HomeContentComponent from './components/HomeContentComponent';
import NewMeditationModalComponent from './components/modals/NewMeditationModalComponent';
import NewBreathingModalComponent from './components/modals/NewBreathingModalComponent';
import useAuth from '../../common-component/hooks/useAuth';
import AuthWrapper from '../../common-component/AuthWrapper';

export default function HomePage() {
  const user = useAuth();
  const [receivedData, setReceivedData] = useState([]);
  const [showMeditationModal, setShowMeditationModal] = useState(false);
  const [showBreathingModal, setShowBreathingModal] = useState(false);

  useEffect(() => {
    const escListener = (event) => {
      if ((showMeditationModal || showBreathingModal) && event.key === 'Escape') {
        setShowBreathingModal(false);
        setShowMeditationModal(false);
      }
    };

    document.addEventListener('keydown', escListener);
    return () => window.removeEventListener('keydown', escListener);
  }, [showMeditationModal, showBreathingModal]);

  const onSubmitFilter = (params) => {
    axios
      .get('/stubget', { params })
      .then((response) => setReceivedData(Object.values(response.data)));
  };

  const modal = useMemo(() => {
    if (showMeditationModal) {
      return <NewMeditationModalComponent />;
    }
    if (showBreathingModal) {
      return <NewBreathingModalComponent onCancel={() => setShowBreathingModal(false)} />;
    }
    return <div />;
  }, [showMeditationModal, showBreathingModal]);

  const element = (
    <div className={`relative min-w-full ${showMeditationModal || showBreathingModal ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <div
        id="modal-overlay"
        className={`absolute flex items-center justify-center z-10 w-full h-screen bg-black/70 ${showMeditationModal || showBreathingModal ? 'block' : 'hidden'}`}
      >
        {modal}
      </div>
      <div className="flex overflow-x-clip flex-col items-center w-full min-h-screen bg-web-bg">
        <UIShellComponent username="da" />
        <div className="h-8" />
        <HomeActionGroupComponent
          onMeditationClick={() => setShowMeditationModal(true)}
          onBreathingClick={() => setShowBreathingModal(true)}
        />
        <div className="h-12" />
        <FilterGroupComponent
          itemName="Meditation"
          totalFound={18}
          onSubmitFilter={onSubmitFilter}
        />
        <div className="h-6" />
        <HomeContentComponent receivedData={receivedData} />
        <div className="h-12" />
      </div>
    </div>
  );

  return <AuthWrapper user={user} child={element} />;
}
