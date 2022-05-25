import { useState } from 'react';
import UIShellComponent from '../../../common-component/UIShellComponent';
import MarketplaceTabEnum from '../typedefs/MarketplaceTabEnum';
import MarketplaceTabComponent from './components/MarketplaceTabComponent';

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState(MarketplaceTabEnum.Meditation);

  return (
    <div className="flex flex-col w-screen h-screen">
      <UIShellComponent username="Kaka" />
      <div className="h-12" />
      <div id="content" className="px-16 w-full h-full">
        <MarketplaceTabComponent
          activeTab={activeTab}
          onMeditationTabClick={() => setActiveTab(MarketplaceTabEnum.Meditation)}
          onBreathingTabClick={() => setActiveTab(MarketplaceTabEnum.Breathing)}
        />
      </div>
    </div>
  );
}
