import { useMemo, useState } from 'react';
import CommonButtonComponent from '../../../../common-component/CommonButtonComponent';
import PlusIcon from '../../../../common-component/icons/PlusIcon';
import { CommentType } from '../typedefs/CommentType';
import CommentItemComponent from './CommentItemComponent';
import RatingComponent from './RatingComponent';

function CommentComponent() {
  return (
    <div className="flex flex-row items-start py-8 w-full border-b-2 border-b-gray-300">
      <div className="flex justify-center items-center w-16 h-16">
        <div className="w-full h-full bg-gray-500 rounded-full" />
      </div>
      <div className="w-8" />
      <div className="flex flex-col w-full h-full">
        <textarea
          className="p-2 border-2 border-gray-300 focus:border-blue-600 outline-none transition duration-100 bg-web-bg font-ibm-plex-sans"
          placeholder="Some awesome comment to write.."
          rows={5}
        />
        <div className="h-6" />
        <div className="flex flex-row justify-end items-center w-full">
          <p className="text-lg font-ibm-plex-sans">Rating:</p>
          <div className="w-2" />
          <RatingComponent rating={2} />
        </div>
        <div className="h-6" />
        <div className="flex justify-end items-center">
          <CommonButtonComponent
            buttonType="secondary"
            text="Comment"
            onClickCallback={() => console.log('implement')}
          />
        </div>
      </div>
    </div>
  );
}

export default function MarketplaceDetailCommentComponent({
  comments,
}: { comments: CommentType[] }) {
  const elements = useMemo(
    () => comments.map(
      (element) => <CommentItemComponent key={element.authorName} commentData={element} />,
    ),
    [comments],
  );

  const [showCommentComponent, setShowCommentComponent] = useState(false);

  return (
    <div className="flex flex-col pb-16 pl-16 w-[60%]">
      <div className="flex flex-row justify-between items-center w-full">
        <h2 className="text-5xl font-medium text-black font-ibm-plex-sans">Comments</h2>
        <button
          className="flex justify-center items-center p-4 w-16 h-16 hover:bg-[#dbdbdb] active:bg-[#b1b1b1] rounded-full transition duration-75 bg-web-bg"
          type="button"
          onClick={() => setShowCommentComponent(!showCommentComponent)}
        >
          <div className="w-full h-full stroke-black stroke-2"><PlusIcon /></div>
        </button>
      </div>
      <div className="h-4" />
      {showCommentComponent ? <CommentComponent /> : null}
      {elements}
    </div>
  );
}
