import CheckIcon from '../../../common-component/icons/CheckIcon';

type Props = {
  text: string,
  isActive: boolean,
  onClickCallback: () => void,
};

export default function ChipComponent({ text, isActive, onClickCallback }: Props) {
  let className = 'flex flex-row py-2 px-6 rounded-full items-center transition-all';

  let iconComponent;
  if (isActive) {
    iconComponent = (
      <>
        <div className="w-6 h-6 stroke-black"><CheckIcon /></div>
        <div className="w-2" />
      </>
    );
    className += ' bg-green-300';
  } else {
    iconComponent = <div />;
    className += ' bg-green-100';
  }

  return (
    <button type="button" className={className} onClick={onClickCallback}>
      {iconComponent}
      <p className="font-ibm-plex-sans text-lg text-black">
        {text}
      </p>
    </button>
  );
}
