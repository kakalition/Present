import React, { SyntheticEvent } from 'react';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'white-tertiary' | 'ghost';

type Props = {
  buttonType: ButtonType
  fillSpace?: boolean,
  fillX?: boolean,
  fillY?: boolean,
  icon?: JSX.Element,
  onClickCallback: (e: SyntheticEvent) => void,
  padding?: string,
  text: string,
  textSize?: string,
};

export default function CommonButtonComponent({
  buttonType,
  fillSpace = false,
  fillX = false,
  fillY = false,
  icon = <div />,
  onClickCallback,
  padding = 'lg:p-3 lg:pr-12 md:pr-8 p-2 pr-8',
  text,
  textSize = 'lg:text-xl text-lg',
}: Props): React.ReactElement {
  let className = `text-left ${textSize} ${padding} ${fillSpace ? 'h-full w-full' : ''} ${fillX ? 'w-full' : ''} ${fillY ? 'h-full' : ''}`
    + 'whitespace-nowrap font-ibm-plex-sans transition-all duration-100';

  switch (buttonType) {
    case 'primary': {
      className += ' bg-primary-button text-white hover:brightness-[90%]';
      break;
    }
    case 'secondary': {
      className += '  bg-secondary-button text-white hover:brightness-[90%]';
      break;
    }
    case 'tertiary': {
      className += '  border-2 border-primary-button text-primary-button hover:brightness-[90%] hover:text-white hover:bg-primary-button';
      break;
    }
    case 'white-tertiary': {
      className += '  border-2 border-white text-white hover:text-black hover:bg-white ';
      break;
    }
    case 'ghost': {
      className += ' text-primary-button hover:bg-slate-200';
      break;
    }
    // no default
  }

  return (
    <button
      className={className}
      type="button"
      onClick={onClickCallback}
    >
      <div className="flex justify-between items-center w-full">
        {text}
        {icon}
      </div>
    </button>
  );
}
