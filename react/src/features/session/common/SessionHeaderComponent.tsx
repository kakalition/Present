import LeftIcon from '../../../common-component/icons/LeftIcon';

export default function Header({ title }: { title: string }) {
  return (
    <div className="flex z-[1] flex-row items-center w-full">
      <div className="w-12 h-12 stroke-white stroke-[3px]"><LeftIcon /></div>
      <h1 className="w-full text-4xl font-bold text-center text-white font-poppins">{title}</h1>
      <div className="w-12 h-12" />
    </div>
  );
}
