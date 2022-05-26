import { useNavigate } from 'react-router-dom';
import LeftIcon from '../../../common-component/icons/LeftIcon';
import UIShellComponent from '../../../common-component/UIShellComponent';
import MarketplaceCardComponent from '../root/components/MarketplaceCardComponent';

export default function MarketplaceInDetailPage() {
  const contents = ['Calmness Meditation', 'Fire Breathing', 'Void Sensation', 'Soul Stone', 'Orange Step', 'Hyper Relaxation', 'Wind Voice', 'Dark Aura', 'Green Stone', 'Sharp Black'];
  const test = contents.map((content) => <MarketplaceCardComponent key={content} text={content} onClick={() => console.log('implements')} />);
  const navigateTo = useNavigate();

  function goBack() {
    navigateTo('/marketplace');
  }

  return (
    <div className="flex flex-col w-screen min-h-screen">
      <UIShellComponent username="Kaka" />
      <div className="h-12" />
      <div id="content" className="flex flex-col justify-start items-start px-24 pb-16 w-full h-full ">
        <div className="flex flex-row items-center w-full">
          <button
            aria-label="back to marketplace"
            className="p-5 w-20 h-20 hover:bg-gray-200 active:bg-gray-300 rounded-full transition duration-100 stroke-black stroke-2"
            type="button"
            onClick={goBack}
          >
            <LeftIcon />
          </button>
          <div className="w-4" />
          <p className="text-[2.5rem] font-semibold text-black font-ibm-plex-sans">Relaxation</p>
        </div>
        <div className="h-8" />
        <div className="grid grid-cols-6 gap-6 w-full">
          {test}
        </div>
      </div>
    </div>
  );
}
