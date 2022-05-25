import React from 'react';
import HistoryTileComponent from '../components/HistoryTileComponent';
import HistoryTitleComponent from '../components/HistoryTitleComponent';
import { DummyType } from '../typedefs/DummyType';

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function HistoryTileGenerator(data:DummyType[]) {
  const today = (new Date()).getDate();
  let trackedTime = 0;

  const elements = data.map((value) => {
    const valueDate = new Date(value.timestamp);
    const timestampString = valueDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let titleValue;
    if (valueDate.getDate() === today) {
      titleValue = 'Today';
    } else if (valueDate.getDate() - today === -1) {
      titleValue = 'Yesterday';
    } else {
      titleValue = `${month[valueDate.getMonth()]} ${valueDate.getDate()}, ${valueDate.getFullYear()}`;
    }

    if (valueDate.getDate() !== trackedTime) {
      trackedTime = valueDate.getDate();
      return (
        <React.Fragment key={value.timestamp}>
          <div className="h-4" />
          <HistoryTitleComponent title={titleValue} />
          <div className="h-4" />
          <HistoryTileComponent
            name={value.name}
            timestampString={timestampString}
            sessionType={value.type}
          />
          <div className="h-4" />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={value.timestamp}>
        <HistoryTileComponent
          name={value.name}
          timestampString={timestampString}
          sessionType={value.type}
        />
        <div className="h-4" />
      </React.Fragment>
    );
  });

  return elements;
}
