import { useMemo } from 'react';
import RightArrowIcon from '../../../../common-component/icons/RightArrrowIcon';
import MarketplaceCardComponent from './MarketplaceCardComponent';

export default function MarketplaceSectionComponent({
  title, contents,
}: { title: string, contents: string[] }) {
  const elements = useMemo(
    () => contents.map((content) => <MarketplaceCardComponent text={content} onClick={() => console.log('implements')} />),
    [contents],
  );

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-4xl font-semibold text-black font-ibm-plex-sans">{title}</h2>
      <div className="h-6" />
      <div className="grid grid-cols-6 gap-6 w-full">
        {elements}
        <button
          aria-label="more"
          className="flex justify-center items-center pb-6 h-96 bg-[#3A3A3A]"
          type="button"
          onClick={() => console.log('implements')}
        >
          <div className="p-10 w-32 h-32 bg-white rounded-full stroke-[#3A3A3A] stroke-2">
            <RightArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
