import { useState } from 'react';
import UIShellComponent from '../../../common-component/UIShellComponent';
import MarketplaceTabEnum from '../typedefs/MarketplaceTabEnum';
import MarketplaceSectionComponent from './components/MarketplaceSectionComponent';
import MarketplaceTabComponent from './components/MarketplaceTabComponent';

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState(MarketplaceTabEnum.Meditation);

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <UIShellComponent username="Kaka" />
      <div className="h-12" />
      <div id="content" className="flex flex-col justify-start items-start px-16 pb-16 w-full h-full ">
        <MarketplaceTabComponent
          activeTab={activeTab}
          onMeditationTabClick={() => setActiveTab(MarketplaceTabEnum.Meditation)}
          onBreathingTabClick={() => setActiveTab(MarketplaceTabEnum.Breathing)}
        />
        <div className="h-12" />
        <MarketplaceSectionComponent
          title="Featured"
          contents={['Calmness Meditation', 'Fire Breathing', 'Void Sensation', 'Soul Stone', 'Orange Step']}
        />
        <div className="h-12" />
        <MarketplaceSectionComponent
          title="Newly Added"
          contents={['Hyper Relaxation', 'Wind Voice', 'Dark Aura', 'Green Stone', 'Sharp Black']}
        />
      </div>
    </div>
  );
}
