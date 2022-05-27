import ItemTileComponent from './ItemTileComponent';

type ReceivedData = {
  meditations: any[],
  breaths: any[],
};

type Props = {
  receivedData: ReceivedData
};

export default function HomeContentComponent({
  receivedData,
}: Props) {
  const content = (() => {
    const temporary: JSX.Element[] = [];
    temporary?.push(...receivedData.meditations.map((element: any) => (
      <ItemTileComponent
        key={element.id}
        title={element.title}
        tag="Meditation"
        description={element.description}
        sessionDetail={{ id: element.id, type: 'Meditation' }}
      />
    )));

    temporary?.push(...receivedData.breaths.map((element: any) => (
      <ItemTileComponent
        key={element.description}
        title={element.title}
        tag="Breathing Exercise"
        description={element.description}
        sessionDetail={{ id: element.id, type: 'Breathing' }}
      />
    )));
    return temporary;
  })();

  return (
    <div className="grid grid-cols-4 gap-4 px-24 w-full">
      {content}
    </div>
  );
}
