import PlayIcon from '../../../../common-component/icons/PlayIcon';

export default function PlayButtonComponent() {
  return (
    <div className="h-56 w-56 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all">
      <div className="h-24 w-24 stroke-black stroke-[2px] flex flex-row items-center justify-center">
        <div className="w-2" />
        <PlayIcon />
      </div>
    </div>
  );
}
