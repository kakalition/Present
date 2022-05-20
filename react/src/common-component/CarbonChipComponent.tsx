import XIcon from './icons/XIcon';

interface Props {
  text: string,
  bgClass?: string,
  isFilter?: boolean,
  isFilterActive?: boolean,
  actions?: {
    onClick: () => void,
    onXClick: () => void,
  }
}

export default function CarbonChipComponent({
  text,
  bgClass = 'bg-green-200',
  isFilter = false,
  isFilterActive = false,
  actions = { onClick: null, onXClick: null },
}: Props) {
  const deselectPart = (
    <button
      className={`${bgClass} hover:brightness-90 flex items-center justify-center rounded-full ml-0 h-full w-full p-2`}
      onClick={actions.onXClick}
      type="button"
    >
      <div className="w-4 h-4 stroke-black stroke-2"><XIcon /></div>
    </button>
  );

  return (
    <button type="button" onClick={actions.onClick} disabled={!isFilter || isFilterActive}>
      <div className={`flex flex-row justify-center items-center pl-2 rounded-full ${isFilterActive ? '' : 'py-1'} ${bgClass}`}>
        <p className="font-ibm-plex-sans text-sm text-black whitespace-nowrap">{text}</p>
        {isFilterActive ? deselectPart : <div className="w-3" />}
      </div>
    </button>
  );
}
