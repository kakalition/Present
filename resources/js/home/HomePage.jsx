import PropTypes from 'prop-types';
import { useState } from 'react';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import AddButtonComponent from './components/AddButtonComponent';
import ChipComponent from './components/ChipComponent';
import SearchBarComponent from './components/SearchBarComponent';
import FilterButtonComponent from './components/FilterButtonComponent';
import ItemTileComponent from './components/ItemTileComponent';
import ResultTextComponent from './components/ResultTextComponent';
import SortByComponent from './components/SortByComponent';
import SortByPopupComponent from './components/SortByPopupComponent';
import usePopupAddon from '../common-component/hooks/usePopupAddon';

function TopOne() {
  return (
    <div className="flex flex-row items-center px-16 w-full h-[8%]">
      <div className="basis-1/2 h-full"><SearchBarComponent /></div>
      <div className="w-8" />
      <div className="basis-1/4 h-full"><AddButtonComponent text="New Meditation" background="bg-gradient-to-bl from-blue-700 to-sky-400" clickCallback={() => {}} fillSpace /></div>
      <div className="w-8" />
      <div className="basis-1/4 h-full"><AddButtonComponent text="New Breathing Exercise" background="bg-gradient-to-bl from-orange-600 to-orange-300" clickCallback={() => {}} fillSpace /></div>
    </div>
  );
}

function ChipGroup(props) {
  const {
    breathingFilter, meditationFilter, toggleBreathing, toggleMeditation,
  } = props;

  return (
    <div className="flex flex-col p-6 bg-white border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300 shadow-md">
      <p className="font-ibm-plex-sans text-base text-black">Categories</p>
      <div className="h-4" />
      <div className="flex flex-row">
        <ChipComponent text="Breathing exercise" isActive={breathingFilter} onClickCallback={toggleBreathing} />
        <div className="w-4" />
        <ChipComponent text="Meditation" isActive={meditationFilter} onClickCallback={toggleMeditation} />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-row justify-evenly items-center px-16 w-full">
      <ItemTileComponent
        title="Calmness"
        tag="Meditation"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="w-16" />
      <ItemTileComponent
        title="Calmness"
        tag="Meditation"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="w-16" />
      <ItemTileComponent
        title="Calmness"
        tag="Meditation"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="w-16" />
      <ItemTileComponent
        title="Calmness"
        tag="Meditation"
        shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
}

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  const [animationCallback, popupClass] = usePopupAddon('filterPopup', '4rem', '3.5rem');

  // For Development Only
  const [breathingFilter, setBreathingFilter] = useState(false);
  const [meditationFilter, setMeditationFilter] = useState(false);
  const [currentSort, setCurrentSort] = useState('frequently-used');

  return (
    <div className="flex flex-col items-center w-screen h-screen bg-web-bg">
      <UIShellComponent username={username} />
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div className="h-8" />
        <TopOne />
        <div className="h-8" />
        <div className="flex flex-row items-start self-start ml-16">
          <ChipGroup
            breathingFilter={breathingFilter}
            meditationFilter={meditationFilter}
            toggleBreathing={() => setBreathingFilter(!breathingFilter)}
            toggleMeditation={() => setMeditationFilter(!meditationFilter)}
          />
          <div className="w-8" />

          <div className="flex relative flex-col items-start">
            <FilterButtonComponent onClickCallback={animationCallback} />
            <div id="filterPopup" className={popupClass}>
              <SortByPopupComponent />
            </div>
          </div>

          <div className="w-8" />
          <div className="flex flex-col">
            <ResultTextComponent itemName="meditations" total={12} />
            <div className="w-8" />
            <SortByComponent currentSort={currentSort} />
          </div>
          <div className="w-8" />
          <SortByPopupComponent />
        </div>
        <div className="h-8" />
        <Content />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
