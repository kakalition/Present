import StarIcon from '../../../../common-component/icons/StarIcon';

export default function RatingComponent({ rating }: { rating: number }) {
  const yellowClass = 'stroke-yellow-400 fill-yellow-400';
  const grayClass = 'stroke-gray-400 fill-gray-400';

  return (
    <div className="flex flex-row">
      <div className={`w-8 h-8 stroke-1 ${rating > 0 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 1 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 2 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 3 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 4 ? yellowClass : grayClass}`}><StarIcon /></div>
    </div>
  );
}
