import LeftIcon from '../../../common-component/icons/LeftIcon';

export default function Header() {
  return (
    <div className="flex w-full flex-row z-[1] items-center">
      <div className="h-12 w-12 stroke-white stroke-[3px]"><LeftIcon /></div>
      <h1 className="font-poppins font-bold text-white text-4xl text-center w-full">Calmness Meditation</h1>
      <div className="h-12 w-12" />
    </div>
  );
}
