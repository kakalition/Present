import ItemTileComponent from './ItemTileComponent';

type Props = {
  receivedData: any[]
};

export default function HomeContentComponent({
  receivedData,
}: Props) {
  const content = receivedData.map((element) => (
    <ItemTileComponent
      key={element.description}
      title={element.title}
      tag={element.tag}
      description={element.description}
    />
  ));

  return (
    <div className="grid grid-cols-4 gap-4 px-24 w-full">
      {content}
    </div>
  );
}
