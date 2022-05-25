export default function HistoryTileComponent({
  name, timestampString,
} : { name: string, timestampString: string }) {
  return (
    <div className="flex flex-col p-4 w-full bg-gray-200">
      <p className="text-xl text-black font-ibm-plex-sans">{name}</p>
      <div className="h-2" />
      <p className="text-xl text-black font-ibm-plex-sans">{timestampString}</p>
    </div>
  );
}
