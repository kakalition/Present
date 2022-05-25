import CarbonChipComponent from '../../../common-component/CarbonChipComponent';
import { SessionType } from '../typedefs/DummyType';

export default function HistoryTileComponent({
  name, timestampString, sessionType,
} : { name: string, timestampString: string, sessionType: SessionType }) {
  return (
    <div className="flex flex-row justify-between items-center p-5 w-full bg-gray-100">
      <p className="text-2xl text-black font-ibm-plex-sans">{name}</p>
      <div className="flex flex-row items-center">
        <CarbonChipComponent text={sessionType.toString()} bgClass={sessionType === SessionType.Meditation ? 'bg-[#B9D5FF]' : 'bg-[#A3FFE9]'} />
        <div className="w-10" />
        <p className="text-lg font-normal text-gray-600 font-ibm-plex-sans">{timestampString}</p>
      </div>
    </div>
  );
}
