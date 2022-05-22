import ItemTileComponent from './ItemTileComponent';

type Props = {
  receivedData: any[]
};

export default function HomeContentComponent({
  receivedData,
}: Props) {
  const content = receivedData.map((element) => (
    <ItemTileComponent
      key={element.shortDescription}
      title={element.title}
      tag={element.tag}
      shortDescription={element.shortDescription}
    />
  ));

  return (
    <div className="grid grid-cols-4 gap-4 px-16 w-full">
      {content}
    </div>
  );
}
