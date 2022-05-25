import _ from 'lodash';
import {
  useEffect, useState,
} from 'react';
import UIShellComponent from '../../common-component/UIShellComponent';
import { DummyType, SessionType } from './typedefs/DummyType';
import HistoryTileGenerator from './utils/HistoryTileGenerator';

const dummyData: DummyType[] = [
  { name: 'Body Scan', type: SessionType.Meditation, timestamp: 1653451961000 },
  { name: 'Calmness Meditation', type: SessionType.Meditation, timestamp: 1653451661000 },
  { name: 'Box Breathing', type: SessionType.Breathing, timestamp: 1653365261000 },
  { name: 'Fire Breathing', type: SessionType.Breathing, timestamp: 1653278861000 },
];

const formattedList = _(dummyData)
  .sort((a, b) => a.timestamp - b.timestamp)
  .groupBy((v) => new Date(v.timestamp).getDate())
  .map((value) => value)
  .reverse()
  .flatten()
  .value();

export default function HistoryPage() {
  const [historyComponentList, setHistoryComponentList] = useState<JSX.Element[]>();
  useEffect(() => {
    setHistoryComponentList(HistoryTileGenerator(formattedList));
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
