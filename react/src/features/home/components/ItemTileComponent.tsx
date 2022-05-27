import axios from 'axios';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CarbonChipComponent from '../../../common-component/CarbonChipComponent';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';
import RightArrowIcon from '../../../common-component/icons/RightArrrowIcon';

type Props = {
  title: string,
  tag: string,
  description: string,
  sessionDetail: { id: number, type: string }
};

export default function ItemTileComponent({
  title, tag, description, sessionDetail,
}: Props) {
  const navigateTo = useNavigate();
  const trimmedDescription = useMemo(() => {
    if (description !== null || description !== undefined) return `${description?.substring(0, 100)}...` ?? '';
    return '';
  }, [description]);

  const onClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    axios.post('/api/setSessionCookie', { id: sessionDetail.id, type: sessionDetail.type });
    navigateTo('/meditation');
  };

  return (
    <div className="flex flex-col justify-between items-start p-8 w-full h-full bg-white">
      <div>
        <h2 className="text-4xl font-semibold text-black font-ibm-plex-sans">{title}</h2>
        <div className="h-3" />
        <CarbonChipComponent text={tag} bgClass={tag === 'Meditation' ? 'bg-green-200' : 'bg-orange-200'} />
        <div className="h-3" />
        <p className="text-base leading-tight text-slate-700 font-ibm-plex-sans">{trimmedDescription}</p>
      </div>
      <div className="h-4" />
      <CommonButtonComponent
        buttonType="tertiary"
        onClickCallback={onClick}
        text="Start session"
        textSize="text-base"
        icon={<RightArrowIcon />}
        padding="px-4 py-2"
        fillX
      />
    </div>
  );
}
