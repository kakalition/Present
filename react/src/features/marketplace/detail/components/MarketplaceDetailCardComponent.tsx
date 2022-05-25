import { MarketplaceDetailCardType } from '../typedefs/MarketplaceDetailCardType';
import RatingComponent from './RatingComponent';

export default function MarketplaceDetailCardComponent({
  detailCardData, averageRating,
}: { detailCardData: MarketplaceDetailCardType, averageRating: number }) {
  return (
    <div className="bg-[#ebebeb] flex flex-col p-6">
      <p className="font-ibm-plex-sans text-base text-slate-600">Session Detail</p>
      <div className="h-4" />
      <p className="font-ibm-plex-sans text-lg text-black">
        Author name:
        {' '}
        {detailCardData.authorName}
      </p>
      <p className="font-ibm-plex-sans text-lg text-black">
        Published date:
        {' '}
        {detailCardData.publishedDate}
      </p>
      <p className="font-ibm-plex-sans text-lg text-black">
        Total saved:
        {' '}
        {detailCardData.totalSaved}
      </p>
      <div className="flex flex-row w-full justify-start items-center">
        <p className="font-ibm-plex-sans text-lg text-black">Rating: </p>
        <div className="w-2" />
        <RatingComponent rating={averageRating} />
      </div>
    </div>
  );
}
