import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import axios from 'axios';

import UIShellComponent from '../../common-component/UIShellComponent';
import HomeActionGroupComponent from './components/groups/HomeActionGroupComponent';
import FilterGroupComponent from './components/groups/FilterGroupComponent';
import HomeContentComponent from './components/HomeContentComponent';
import NewMeditationModalComponent from './components/modals/NewMeditationModalComponent';
import NewBreathingModalComponent from './components/modals/NewBreathingModalComponent';
import AuthWrapper from '../../common-component/AuthWrapper';
import useProtectedRoute from '../../utils/hooks/useProtectedRoute';
import { FilterPopupStates } from './typedef/FilterTypeDef';
import { SessionData, SessionItem } from './typedef/SessionData';

function jsonSessionToSessionItemMapper(sessionObject: any, type: string) {
  const sessionItem: SessionItem = {
    id: sessionObject.id,
    type,
    title: sessionObject.title,
    description: sessionObject.description,
  };
  return sessionItem;
}

function responseToSessionDataMapper(responseData: any) {
  const transformedMeditations = responseData.meditations.map(
    (value: any) => jsonSessionToSessionItemMapper(value, 'Meditation'),
  ) as SessionItem[];
  const transformedBreaths = responseData.breaths.map(
    (value: any) => jsonSessionToSessionItemMapper(value, 'Breathing Exercise'),
  ) as SessionItem[];

  const localReceivedData: SessionData = {
    meditations: transformedMeditations,
    breaths: transformedBreaths,
  };

  return localReceivedData;
}

function searchThroughData(searchQuery: string, data: SessionData) {
  const searchText = searchQuery;
  const filteredMeditations = data.meditations.filter(
    (value) => value.title.toLowerCase().includes(searchText.toLowerCase()),
  );
  const filteredBreaths = data.breaths.filter(
    (value) => value.title.toLowerCase().includes(searchText.toLowerCase()),
  );
  const localReceivedData: SessionData = {
    meditations: filteredMeditations,
    breaths: filteredBreaths,
  };

  return localReceivedData;
}

export default function HomePage(): JSX.Element {
  const user = useProtectedRoute();

  const [receivedData, setReceivedData] = useState<SessionData>(
    { meditations: [], breaths: [] },
  );
  const [filteredData, setFilteredData] = useState<SessionData>(receivedData);

  const [showMeditationModal, setShowMeditationModal] = useState(false);
  const [showBreathingModal, setShowBreathingModal] = useState(false);

  // Initial Fetch
  useEffect(() => {
    axios
      .get('/api/getAllSaved')
      .then((response) => {
        setReceivedData(responseToSessionDataMapper(response.data));
        setFilteredData(responseToSessionDataMapper(response.data));
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
      .get('/api/filter', { params })
      .then((response) => {
        const query = (document.getElementById('query') as HTMLInputElement).value;
        const processedData = searchThroughData(
          query,
          responseToSessionDataMapper(response.data),
        );
        setReceivedData(processedData);
        setFilteredData(processedData);
      });
  }, []);

  const onSearchTextChange: React.ChangeEventHandler = (e) => {
    const searchedData = searchThroughData(
      (e.target as HTMLInputElement).value,
      receivedData,
    );
    setFilteredData(searchedData);
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
          totalFound={filteredData.meditations.length + filteredData.breaths.length}
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
