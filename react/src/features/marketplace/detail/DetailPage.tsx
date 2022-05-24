import { useMemo } from 'react';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';
import LeftIcon from '../../../common-component/icons/LeftIcon';
import PlusIcon from '../../../common-component/icons/PlusIcon';
import StarIcon from '../../../common-component/icons/StarIcon';

type SessionCard = {
  authorName: string,
  publishedDate: string,
  totalSaved: number,
  rating: number,
};

type Comment = {
  profileImgUrl: string,
  authorName: string,
  date: string,
  rating: number,
  comment: string,
};

type SessionDetail = {
  name: string,
  description: string,
  sessionCard: SessionCard,
  comments: Comment[]
};

function StarRating({ rating }: { rating: number }) {
  const yellowClass = 'stroke-yellow-400 fill-yellow-400';
  const grayClass = 'stroke-gray-400 fill-gray-400';

  return (
    <div className="flex flex-row">
      <div className={`w-8 h-8 stroke-1 ${rating > 0 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 1 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 2 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 3 ? yellowClass : grayClass}`}><StarIcon /></div>
      <div className={`w-8 h-8 stroke-1 ${rating > 4 ? yellowClass : grayClass}`}><StarIcon /></div>
    </div>
  );
}

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

function DetailCard({ detailData }: { detailData: SessionCard }) {
  return (
    <div className="bg-[#ebebeb] flex flex-col p-6">
      <p className="font-ibm-plex-sans text-base text-slate-600">Session Detail</p>
      <div className="h-4" />
      <p className="font-ibm-plex-sans text-lg text-black">
        Author name:
        {' '}
        {detailData.authorName}
      </p>
      <p className="font-ibm-plex-sans text-lg text-black">
        Published date:
        {' '}
        {detailData.publishedDate}
      </p>
      <p className="font-ibm-plex-sans text-lg text-black">
        Total saved:
        {' '}
        {detailData.totalSaved}
      </p>
      <div className="flex flex-row w-full justify-start items-center">
        <p className="font-ibm-plex-sans text-lg text-black">Rating: </p>
        <div className="w-2" />
        <StarRating rating={detailData.rating} />
      </div>
    </div>
  );
}

function MainContent({ description, detailData }
: { description: string, detailData: SessionCard }) {
  return (
    <div className="flex flex-row w-full p-16">
      <div className="w-[60%]">
        <p className="text-black font-ibm-plex-sans whitespace-pre-line text-xl">{description}</p>
      </div>
      <div className="w-[10%]" />
      <div className="w-[30%]">
        <DetailCard detailData={detailData} />
      </div>
    </div>
  );
}

function CommentItem({ commentData }: { commentData: Comment }) {
  return (
    <div className="flex flex-row w-full items-start border-b-2 border-b-gray-300 py-8">
      <div className="h-16 w-16 flex items-center justify-center">
        <div className="bg-gray-500 rounded-full h-full w-full" />
      </div>
      <div className="w-8" />
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-ibm-plex-sans text-black text-4xl">{commentData.authorName}</p>
          <StarRating rating={commentData.rating} />
        </div>
        <div className="h-1" />
        <p className="font-ibm-plex-sans text-gray-900 text-base">{commentData.date}</p>
        <div className="h-1" />
        <p className="font-ibm-plex-sans text-black text-lg leading-tight">
          {commentData.comment}
        </p>
      </div>
    </div>
  );
}

function CommentSection({ comments }: { comments: Comment[] }) {
  const elements = useMemo(
    () => comments.map(
      (element) => <CommentItem key={element.authorName} commentData={element} />,
    ),
    [comments],
  );

  return (
    <div className="flex flex-col w-[60%] pl-16 pb-16">
      <div className="flex flex-row w-full items-center justify-between">
        <h2 className="font-ibm-plex-sans text-black text-5xl font-medium">Comments</h2>
        <div className="h-8 w-8 stroke-2 stroke-black"><PlusIcon /></div>
      </div>
      <div className="h-4" />
      {elements}
    </div>
  );
}

export default function DetailPage() {
  const sessionCardData: SessionCard = {
    authorName: 'Kaka',
    publishedDate: 'May 24, 2022',
    rating: 5,
    totalSaved: 150,
  };

  const commentsData: Comment[] = [
    {
      authorName: 'Ano',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'May 23, 2022',
      profileImgUrl: '',
      rating: 4,
    },
    {
      authorName: 'Enlio',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'May 24, 2022',
      profileImgUrl: '',
      rating: 3,
    },
  ];

  const detailData: SessionDetail = {
    name: 'Calmness Meditation',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    sessionCard: sessionCardData,
    comments: commentsData,
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-web-bg">
      <Header title={detailData.name} />
      <MainContent
        description={detailData.description}
        detailData={detailData.sessionCard}
      />
      <CommentSection comments={detailData.comments} />
    </div>
  );
}
