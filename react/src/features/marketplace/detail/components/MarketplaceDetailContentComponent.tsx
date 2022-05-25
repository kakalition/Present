import { MarketplaceDetailCardType } from '../typedefs/MarketplaceDetailCardType';
import MarketplaceDetailCardComponent from './MarketplaceDetailCardComponent';

export default function MarketplaceDetailContentComponent({
  description, detailCardData, averageRating,
}: { description: string, detailCardData: MarketplaceDetailCardType, averageRating: number }) {
  return (
    <div className="flex flex-row w-full p-16">
      <div className="w-[60%]">
        <p className="text-black font-ibm-plex-sans whitespace-pre-line text-xl">{description}</p>
      </div>
      <div className="w-[10%]" />
      <div className="w-[30%]">
        <MarketplaceDetailCardComponent
          detailCardData={detailCardData}
          averageRating={averageRating}
        />
      </div>
    </div>
  );
}
