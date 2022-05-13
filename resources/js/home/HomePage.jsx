import PropTypes from 'prop-types';
import { useState } from 'react';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import AddButtonComponent from './components/AddButtonComponent';
import SearchBarComponent from './components/SearchBarComponent';
import FilterButtonComponent from './components/FilterButtonComponent';
import ItemTileComponent from './components/ItemTileComponent';
import ResultTextComponent from './components/ResultTextComponent';
import usePopupAddon from '../common-component/hooks/usePopupAddon';
import FilterPopupComponent from './components/FilterPopupComponent';
import CarbonChipComponent from '../common-component/CarbonChipComponent';
import HomeActionGroupComponent from './components/ComponentGroup/HomeActionGroupComponent';

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  const [animationCallback, popupClass] = usePopupAddon('filterPopup', '4rem', '3.5rem');

  // For Development Only
  const [breathingFilter, setBreathingFilter] = useState(false);
  const [meditationFilter, setMeditationFilter] = useState(false);
  const [currentSort, setCurrentSort] = useState('frequently-used');

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-web-bg">
      <UIShellComponent username={username} />
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div className="h-8" />
        <HomeActionGroupComponent />
        <div className="h-8" />
        <div className="flex flex-row items-start self-start ml-16">
          <div className="flex relative flex-col items-start">
            <FilterButtonComponent onClickCallback={animationCallback} />
            <div id="filterPopup" className={popupClass}>
              <FilterPopupComponent />
            </div>
          </div>

          <div className="w-24" />
          <div className="flex flex-col">
            <ResultTextComponent itemName="meditations" total={12} />
            <div className="w-8" />
            <FilterPopupComponent currentSort={currentSort} />
          </div>

          <div className="w-24" />

          <CarbonChipComponent bgClass="bg-sky-200" text="Test Chip" isFilter />
        </div>
        <div className="h-8" />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
