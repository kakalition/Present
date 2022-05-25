import React from 'react';
import HistoryTileComponent from '../components/HistoryTileComponent';
import HistoryTitleComponent from '../components/HistoryTitleComponent';
import { DummyType } from '../typedefs/DummyType';

export default function HistoryTileGenerator(data:DummyType[]) {
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
          <HistoryTitleComponent title={titleValue} />
          <div className="h-4" />
          <HistoryTileComponent
            name={value.name}
            timestampString={valueDate.toLocaleTimeString()}
          />
          <div className="h-4" />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={value.timestamp}>
        <HistoryTileComponent
          key={value.timestamp}
          name={value.name}
          timestampString={valueDate.toLocaleTimeString()}
        />
        <div className="h-4" />
      </React.Fragment>
    );
  });

  return elements;
}
