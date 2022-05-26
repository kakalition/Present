import LeftIcon from '../../../common-component/icons/LeftIcon';
import UIShellComponent from '../../../common-component/UIShellComponent';
import MarketplaceCardComponent from '../root/components/MarketplaceCardComponent';

export default function MarketplaceInDetailPage() {
  const contents = ['Calmness Meditation', 'Fire Breathing', 'Void Sensation', 'Soul Stone', 'Orange Step', 'Hyper Relaxation', 'Wind Voice', 'Dark Aura', 'Green Stone', 'Sharp Black'];
  const test = contents.map((content) => <MarketplaceCardComponent key={content} text={content} onClick={() => console.log('implements')} />);

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <UIShellComponent username="Kaka" />
      <div className="h-12" />
      <div id="content" className="flex flex-col justify-start items-start px-16 pb-16 w-full h-full ">
        <div className="flex flex-row items-center w-full">
          <button
            aria-label="back to marketplace"
            className="p-4 w-16 h-16 hover:bg-gray-200 active:bg-gray-300 rounded-full transition duration-100 stroke-black stroke-2"
            type="button"
          >
            <LeftIcon />
          </button>
          <div className="w-4" />
          <p className="text-4xl font-semibold text-black font-ibm-plex-sans">Relaxation</p>
        </div>
        <div className="h-6" />
        <div className="grid grid-cols-6 gap-6 w-full">
          {test}
        </div>
      </div>
    </div>
  );
}
