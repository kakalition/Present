import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import axios from 'axios';

import { string } from 'prop-types';
import UIShellComponent from '../../common-component/UIShellComponent';
import HomeActionGroupComponent from './components/groups/HomeActionGroupComponent';
import FilterGroupComponent from './components/groups/FilterGroupComponent';
import HomeContentComponent from './components/HomeContentComponent';
import NewMeditationModalComponent from './components/modals/NewMeditationModalComponent';
import NewBreathingModalComponent from './components/modals/NewBreathingModalComponent';
import AuthWrapper from '../../common-component/AuthWrapper';
import useProtectedRoute from '../../utils/hooks/useProtectedRoute';
import { FilterPopupStates } from './typedef/FilterTypeDef';

type SessionItem = {
  id: number,
  type: string,
  title: string,
  description: string,
};

type ReceivedData = {
  meditations: SessionItem[],
  breaths: SessionItem[],
};

function sessionMapper(sessionObject: any, type: string) {
  const sessionItem: SessionItem = {
    id: sessionObject.id,
    type,
    title: sessionObject.title,
    description: sessionObject.description,
  };
  return sessionItem;
}

export default function HomePage(): JSX.Element {
  const user = useProtectedRoute();

  const [receivedData, setReceivedData] = useState<ReceivedData>(
    { meditations: [], breaths: [] },
  );
  const [filteredData, setFilteredData] = useState<ReceivedData>(receivedData);

  const [showMeditationModal, setShowMeditationModal] = useState(false);
  const [showBreathingModal, setShowBreathingModal] = useState(false);

  // Initial Fetch
  useEffect(() => {
    axios
      .get('/api/getAllSaved')
      .then((response) => {
        const transformedMeditations = response.data.meditations.map((value: any) => sessionMapper(value, 'Meditation')) as SessionItem[];
        const transformedBreaths = response.data.breaths.map((value: any) => sessionMapper(value, 'Breathing Exercise')) as SessionItem[];
        const receivedData: ReceivedData = {
          meditations: transformedMeditations,
          breaths: transformedBreaths,
        };

        setReceivedData(receivedData);
        setFilteredData(receivedData);
        console.log(receivedData)
      });
  }, []);

  // Modal Effect
  useEffect(() => {
    const escListener = (e: KeyboardEvent) => {
      if ((showMeditationModal || showBreathingModal) && e.key === 'Escape') {
        setShowBreathingModal(false);
        setShowMeditationModal(false);
      }
    };

    document.addEventListener('keydown', escListener);
    return () => window.removeEventListener('keydown', escListener);
  }, [showMeditationModal, showBreathingModal]);

  // Modal Element
  const modal = useMemo(() => {
    if (showMeditationModal) {
      return <NewMeditationModalComponent onCancelClick={() => setShowMeditationModal(false)} />;
    }
    if (showBreathingModal) {
      return <NewBreathingModalComponent onCancel={() => setShowBreathingModal(false)} />;
    }
    return <div />;
  }, [showMeditationModal, showBreathingModal]);

  const onSubmitFilter = useCallback((params: FilterPopupStates) => {
    axios
      .get('/api/getAllSaved', { params })
      .then((response) => {
        setReceivedData(response.data);
        setFilteredData(response.data);
      });
  }, []);

  const onSearchTextChange: React.ChangeEventHandler = (e) => {
    const searchText = (e.target as HTMLInputElement).value;
  };

  const element = (
    <div className={`relative min-w-full ${showMeditationModal || showBreathingModal ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <div
        id="modal-overlay"
        className={`absolute flex items-center justify-center z-10 w-full h-screen bg-black/70 ${showMeditationModal || showBreathingModal ? 'block' : 'hidden'}`}
      >
        {modal}
      </div>
      <div className="flex overflow-x-clip flex-col items-center w-full min-h-screen bg-web-bg">
        <UIShellComponent username={user?.name ?? ''} />
        <div className="h-12" />
        <HomeActionGroupComponent
          onMeditationClick={() => setShowMeditationModal(true)}
          onBreathingClick={() => setShowBreathingModal(true)}
          onTextChange={onSearchTextChange}
        />
        <div className="h-12" />
        <FilterGroupComponent
          itemName="Meditation"
          totalFound={18}
          onSubmitFilter={onSubmitFilter}
        />
        <div className="h-6" />
        <HomeContentComponent receivedData={filteredData} />
        <div className="h-12" />
      </div>
    </div>
  );

  return <AuthWrapper user={user} child={element} />;
}
