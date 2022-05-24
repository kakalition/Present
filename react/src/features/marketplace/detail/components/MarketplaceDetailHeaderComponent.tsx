import CommonButtonComponent from '../../../../common-component/CommonButtonComponent';
import LeftIcon from '../../../../common-component/icons/LeftIcon';

export default function MarketplaceDetailHeaderComponent({ title }: { title: string }) {
  return (
    <div className="bg-[#ebebeb] flex flex-col h-96 p-16 justify-between w-full">
      <div className="h-12 w-12 stroke-black stroke-2"><LeftIcon /></div>
      <div className="flex flex-row items-center w-full">
        <div className="w-[70%]">
          <h1 className="font-ibm-plex-sans text-7xl text-black">{title}</h1>
        </div>
        <div className="w-[30%]">
          <CommonButtonComponent buttonType="primary" text="Save this meditation" padding="py-6 pl-6 pr-12" onClickCallback={() => console.log('implement!')} />
        </div>
      </div>
    </div>
  );
}
