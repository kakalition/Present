import { useMemo } from 'react';
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
      <div className="h-4" />
      <div className="grid grid-cols-6 gap-4 w-full">
        {elements}
      </div>
    </div>
  );
}
