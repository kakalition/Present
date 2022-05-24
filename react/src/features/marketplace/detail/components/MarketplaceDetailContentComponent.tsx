import { MarketplaceDetailCardType } from '../typedefs/MarketplaceDetailCardType';
import MarketplaceDetailCardComponent from './MarketplaceDetailCardComponent';

export default function MarketplaceDetailContentComponent({ description, detailCardData }
: { description: string, detailCardData: MarketplaceDetailCardType }) {
  return (
    <div className="flex flex-row w-full p-16">
      <div className="w-[60%]">
        <p className="text-black font-ibm-plex-sans whitespace-pre-line text-xl">{description}</p>
      </div>
      <div className="w-[10%]" />
      <div className="w-[30%]">
        <MarketplaceDetailCardComponent detailCardData={detailCardData} />
      </div>
    </div>
  );
}
