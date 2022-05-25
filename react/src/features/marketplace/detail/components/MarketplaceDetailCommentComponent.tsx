import { useMemo } from 'react';
import PlusIcon from '../../../../common-component/icons/PlusIcon';
import { CommentType } from '../typedefs/CommentType';
import CommentItemComponent from './CommentItemComponent';

export default function MarketplaceDetailCommentComponent({
  comments,
}: { comments: CommentType[] }) {
  const elements = useMemo(
    () => comments.map(
      (element) => <CommentItemComponent key={element.authorName} commentData={element} />,
    ),
    [comments],
  );

  return (
    <div className="flex flex-col w-[60%] pl-16 pb-16">
      <div className="flex flex-row w-full items-center justify-between">
        <h2 className="font-ibm-plex-sans text-black text-5xl font-medium">Comments</h2>
        <button
          className="h-16 w-16 p-4 rounded-full bg-web-bg hover:bg-[#dbdbdb] active:bg-[#b1b1b1] flex items-center justify-center transition duration-75"
          type="button"
        >
          <div className="h-full w-full stroke-2 stroke-black"><PlusIcon /></div>
        </button>
      </div>
      <div className="h-4" />
      {elements}
    </div>
  );
}
