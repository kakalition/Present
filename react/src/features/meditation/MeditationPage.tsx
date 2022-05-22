import LeftIcon from '../../common-component/icons/LeftIcon';

export default function MeditationPage() {
  return (
    <div
      className="h-screen w-screen flex flex-col"
    >
      <div className="absolute h-screen w-screen brightness-50 bg-cover bg-center" style={{ backgroundImage: 'url(assets/forest2.jpg)' }} />
      <div className="flex w-full flex-row z-[1] items-center p-8">
        <div className="h-12 w-12 stroke-white stroke-[3px]"><LeftIcon /></div>
        <h1 className="font-poppins font-bold text-white text-4xl text-center w-full">Calmness Meditation</h1>
        <div className="h-12 w-12" />
      </div>
    </div>
  );
}
