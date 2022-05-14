import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import HomeActionGroupComponent from './components/component-group/HomeActionGroupComponent';
import FilterGroupComponent from './components/component-group/FilterGroupComponent';
import FilterPopupComponent from './components/FilterPopupComponent';

// CHECKPOINT, PASS STATE AND ITS CHANGE FUNCTION TO FILTERPOPUPCOMPONENT
export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  // For Development Only
  const onSubmitFilter = () => console.log('submit');

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-web-bg">
      <UIShellComponent username={username} />
      <div className="h-8" />
      <HomeActionGroupComponent />
      <div className="h-12" />
      <FilterGroupComponent
        itemName="Meditation"
        totalFound={18}
        onSubmitFilter={onSubmitFilter}
      />
      <div className="h-24" />
      {/*       <FilterPopupComponent
        currentSort={currentSort}
        onRadioChange={setCurrentSort}
      /> */}
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
