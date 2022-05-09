import SearchIcon from '../../common-component/icons/SearchIcon';

export default function SearchBarComponent() {
  return (
    <div className="flex items-center border-b-2 border-b-slate-300 shadow-md">
      <div className="m-4 w-8 h-8 stroke-black"><SearchIcon /></div>
      <input className="w-full font-ibm-plex-sans text-base focus:outline-none " type="text" id="query" name="query" placeholder="Search prompt" />
    </div>
  );
}
