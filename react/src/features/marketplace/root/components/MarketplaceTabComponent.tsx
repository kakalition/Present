import MarketplaceTabEnum from '../../typedefs/MarketplaceTabEnum';

type MarketplaceTabComponentProps = {
  activeTab: MarketplaceTabEnum,
  onMeditationTabClick: () => void,
  onBreathingTabClick: () => void,
};

export default function MarketplaceTabComponent({
  activeTab, onMeditationTabClick, onBreathingTabClick,
}: MarketplaceTabComponentProps) {
  return (
    <div className="flex flex-row w-full">
      <button
        className="flex flex-col w-1/2 hover:bg-gray-100 transition duration-100"
        type="button"
        onClick={onMeditationTabClick}
      >
        <p className={`py-3 pl-3 text-lg ${activeTab === MarketplaceTabEnum.Meditation ? 'font-semibold' : 'font-normal'} text-black font-ibm-plex-sans`}>Meditation</p>
        <div className={`w-full h-[0.1rem] ${activeTab === MarketplaceTabEnum.Meditation ? 'bg-blue-600' : 'bg-gray-300'}`} />
      </button>
      <button
        className="flex flex-col w-1/2 hover:bg-gray-100 transition duration-100"
        type="button"
        onClick={onBreathingTabClick}
      >
        <p className={`py-3 pl-3 text-lg ${activeTab === MarketplaceTabEnum.Breathing ? 'font-semibold' : 'font-normal'} text-black font-ibm-plex-sans`}>Breathing exercise</p>
        <div className={`w-full h-[0.1rem] ${activeTab === MarketplaceTabEnum.Breathing ? 'bg-blue-600' : 'bg-gray-300'}`} />
      </button>
    </div>
  );
}
