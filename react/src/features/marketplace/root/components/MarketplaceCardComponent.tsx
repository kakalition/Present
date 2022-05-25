export default function MarketplaceCardComponent({
  text, onClick,
}: { text: string, onClick: () => void }) {
  return (
    <button
      className="flex flex-row justify-start items-end pb-6 h-96 bg-gray-200"
      type="button"
      onClick={onClick}
    >
      <p className="px-6 w-full text-2xl font-semibold text-left text-black break-words font-ibm-plex-sans">{text}</p>
    </button>
  );
}
