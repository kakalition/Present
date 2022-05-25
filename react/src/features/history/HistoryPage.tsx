import React, { useMemo, useState } from 'react';
import UIShellComponent from '../../common-component/UIShellComponent';

type Dummy = {
  name: string,
  timestamp: number,
};

const dummyData: Dummy[] = [
  { name: 'A', timestamp: 1653451661000 },
  { name: 'AB', timestamp: 1653451961000 },
  { name: 'B', timestamp: 1653365261000 },
  { name: 'C', timestamp: 1653278861000 },
];

const sortedDummyData = dummyData.sort((a, b) => b.timestamp - a.timestamp);

function Title({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-3xl font-semibold text-black font-ibm-plex-sans">{title}</h2>
      <div className="h-4" />
    </>
  );
}

function Tile({ name, timestampString } : { name: string, timestampString: string }) {
  return (
    <div className="flex flex-col p-4 w-full bg-gray-200">
      <p className="text-xl text-black font-ibm-plex-sans">{name}</p>
      <div className="h-2" />
      <p className="text-xl text-black font-ibm-plex-sans">{timestampString}</p>
    </div>
  );
}

function Generator(data:Dummy[]) {
  const today = (new Date()).getDate();
  let trackedTime = 0;

  const elements = data.map((value) => {
    const valueDate = new Date(value.timestamp);
    let titleValue;
    if (valueDate.getDate() === today) {
      titleValue = 'Today';
    } else if (valueDate.getDate() - today === -1) {
      titleValue = 'Yesterday';
    } else {
      titleValue = valueDate.toDateString();
    }

    if (valueDate.getDate() !== trackedTime) {
      trackedTime = valueDate.getDate();
      return (
        <React.Fragment key={value.timestamp}>
          <Title title={titleValue} />
          <Tile name={value.name} timestampString={valueDate.toLocaleTimeString()} />
        </React.Fragment>
      );
    }
    return (
      <Tile
        key={value.timestamp}
        name={value.name}
        timestampString={valueDate.toLocaleTimeString()}
      />
    );
  });

  return elements;
}

export default function HistoryPage() {
  const test = useMemo(() => Generator(sortedDummyData), [sortedDummyData]);
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <UIShellComponent username="Kaka" />
      <div className="flex flex-col p-8 w-full h-full">
        {test}
      </div>
    </div>
  );
}
