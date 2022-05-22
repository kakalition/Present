import CarbonChipComponent from '../../../common-component/CarbonChipComponent';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';
import RightArrowIcon from '../../../common-component/icons/RightArrrowIcon';

type Props = {
  title: string,
  tag: string,
  shortDescription: string,
};

export default function ItemTileComponent({
  title, tag, shortDescription,
}: Props) {
  return (
    <div className="flex flex-col justify-between items-start p-8 w-full h-full bg-white">
      <div>
        <h2 className="text-4xl font-semibold text-black font-ibm-plex-sans">{title}</h2>
        <div className="h-3" />
        <CarbonChipComponent text={tag} />
        <div className="h-3" />
        <p className="text-base leading-tight text-slate-700 font-ibm-plex-sans">{shortDescription}</p>
      </div>
      <div className="h-4" />
      <CommonButtonComponent
        buttonType="tertiary"
        onClickCallback={() => console.log('TOOD: Change this with actual implementation.')}
        text="Start session"
        textSize="text-base"
        icon={<RightArrowIcon />}
        padding="px-4 py-2"
        fillX
      />
    </div>
  );
}
