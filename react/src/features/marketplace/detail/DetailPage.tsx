import MarketplaceDetailCommentComponent from './components/MarketplaceDetailCommentComponent';
import MarketplaceDetailContentComponent from './components/MarketplaceDetailContentComponent';
import MarketplaceDetailHeaderComponent from './components/MarketplaceDetailHeaderComponent';
import { MarketplaceDetailType } from './typedefs/MarketplaceDetailType';

const detailData: MarketplaceDetailType = {
  name: 'Calmness Meditation',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  detailCardData: {
    authorName: 'Kaka',
    publishedDate: 'May 24, 2022',
    rating: 5,
    totalSaved: 150,
  },
  commentsData: [
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
  ],
};

export default function DetailPage() {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-web-bg">
      <MarketplaceDetailHeaderComponent title={detailData.name} />
      <MarketplaceDetailContentComponent
        description={detailData.description}
        detailCardData={detailData.detailCardData}
      />
      <MarketplaceDetailCommentComponent comments={detailData.commentsData} />
    </div>
  );
}
