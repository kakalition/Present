import {
  useEffect, useState,
} from 'react';
import UIShellComponent from '../../common-component/UIShellComponent';
import { DummyType } from './typedefs/DummyType';
import HistoryTileGenerator from './utils/HistoryTileGenerator';

const dummyData: DummyType[] = [
  { name: 'A', timestamp: 1653451661000 },
  { name: 'AB', timestamp: 1653451961000 },
  { name: 'B', timestamp: 1653365261000 },
  { name: 'C', timestamp: 1653278861000 },
];

const sortedDummyData = dummyData.sort((a, b) => b.timestamp - a.timestamp);

export default function HistoryPage() {
  const [historyComponentList, setHistoryComponentList] = useState<JSX.Element[]>();
  useEffect(() => {
    setHistoryComponentList(HistoryTileGenerator(sortedDummyData));
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <UIShellComponent username="Kaka" />
      <div className="flex flex-col p-8 w-full h-full">
        {historyComponentList}
      </div>
    </div>
  );
}
