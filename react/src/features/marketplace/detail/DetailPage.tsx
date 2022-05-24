import CommonButtonComponent from '../../../common-component/CommonButtonComponent';
import LeftIcon from '../../../common-component/icons/LeftIcon';
import PlusIcon from '../../../common-component/icons/PlusIcon';

function Header({ title }: { title: string }) {
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

function DetailCard() {
  return (
    <div className="bg-[#ebebeb] flex flex-col p-6">
      <p className="font-ibm-plex-sans text-base text-slate-600">Session Detail</p>
      <div className="h-4" />
      <p className="font-ibm-plex-sans text-lg text-black">Author name: Kaka</p>
      <p className="font-ibm-plex-sans text-lg text-black">Published date: May 23, 2022</p>
      <p className="font-ibm-plex-sans text-lg text-black">Total saved: 25K</p>
      <p className="font-ibm-plex-sans text-lg text-black">Rating: </p>
    </div>
  );
}

function MainContent({ description }: { description: string }) {
  return (
    <div className="flex flex-row w-full p-16">
      <div className="w-[60%]">
        <p className="text-black font-ibm-plex-sans whitespace-pre-line text-xl">{description}</p>
      </div>
      <div className="w-[10%]" />
      <div className="w-[30%]">
        <DetailCard />
      </div>
    </div>
  );
}

function CommentItem() {
  return (
    <div className="flex flex-row w-full items-start border-b-2 border-b-gray-300 py-8">
      <div className="h-16 w-16 flex items-center justify-center">
        <div className="bg-gray-500 rounded-full h-full w-full" />
      </div>
      <div className="w-8" />
      <div className="w-full flex flex-col">
        <p className="font-ibm-plex-sans text-black text-4xl">Lionel Andre</p>
        <div className="h-1" />
        <p className="font-ibm-plex-sans text-gray-900 text-base">May 03, 2022</p>
        <div className="h-1" />
        <p className="font-ibm-plex-sans text-black text-lg">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. `}
        </p>
      </div>
    </div>
  );
}

function CommentSection() {
  return (
    <div className="flex flex-col w-[60%] pl-16 pb-16">
      <div className="flex flex-row w-full items-center justify-between">
        <h2 className="font-ibm-plex-sans text-black text-5xl font-medium">Comments</h2>
        <div className="h-8 w-8 stroke-2 stroke-black"><PlusIcon /></div>
      </div>
      <div className="h-4" />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}

export default function DetailPage() {
  const ob = {
    title: 'Calmness Meditation',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-web-bg">
      <Header title={ob.title} />
      <MainContent description={ob.description} />
      <CommentSection />
    </div>
  );
}
