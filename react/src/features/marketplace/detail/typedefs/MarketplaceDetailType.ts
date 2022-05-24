import { CommentType } from './CommentType';
import { MarketplaceDetailCardType } from './MarketplaceDetailCardType';

export type MarketplaceDetailType = {
  name: string,
  description: string,
  detailCardData: MarketplaceDetailCardType,
  commentsData: CommentType[]
};
