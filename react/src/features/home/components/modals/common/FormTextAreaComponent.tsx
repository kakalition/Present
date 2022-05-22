export default function FormTextAreaComponent({ id }: { id: string }) {
  return (
    <label htmlFor="description" className="flex flex-col items-start text-base text-black md:text-lg font-ibm-plex-sans">
      Description
      <div className="h-2" />
      <textarea
        className="p-4 w-full text-base bg-slate-100 border-2 border-x-transparent border-t-transparent border-b-slate-400 focus:outline-none resize-none font-ibm-plex-sans focus:border-primary-button"
        id={id}
        name={id}
        rows={4}
      />
    </label>
  );
}
