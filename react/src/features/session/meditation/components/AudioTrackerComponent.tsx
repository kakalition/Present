export default function AudioTracker() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-2 relative">
        <div className="w-full h-full absolute bg-slate-600 rounded-full" />
        <div className="w-1/2 h-full absolute bg-white z-[1] rounded-full" />
      </div>
      <div className="h-4" />
      <div className="w-full h-2 flex flex-row justify-between items-center">
        <p className="text-white font-poppins text-lg font-semibold">06:12</p>
        <p className="text-white font-poppins text-lg font-semibold">12:00</p>
      </div>
    </div>
  );
}
