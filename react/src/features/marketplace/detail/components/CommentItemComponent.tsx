import { CommentType } from '../typedefs/CommentType';
import RatingComponent from './RatingComponent';

export default function CommentItemComponent({ commentData }: { commentData: CommentType }) {
  return (
    <div className="flex flex-row w-full items-start border-b-2 border-b-gray-300 py-8">
      <div className="h-16 w-16 flex items-center justify-center">
        <div className="bg-gray-500 rounded-full h-full w-full" />
      </div>
      <div className="w-8" />
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="font-ibm-plex-sans text-black text-4xl">{commentData.authorName}</p>
          <RatingComponent rating={commentData.rating} />
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
