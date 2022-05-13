import PropTypes from 'prop-types';
import { useState } from 'react';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import HomeActionGroupComponent from './components/component-group/HomeActionGroupComponent';
import FilterGroupComponent from './components/component-group/FilterGroupComponent';

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  // For Development Only
  const [breathingFilter, setBreathingFilter] = useState(false);
  const [meditationFilter, setMeditationFilter] = useState(false);
  const [currentSort, setCurrentSort] = useState('frequently-used');


  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-web-bg">
      <UIShellComponent username={username} />
      <div className="h-8" />
      <HomeActionGroupComponent />
      <div className="h-12" />
      <FilterGroupComponent itemName="Meditation" totalFound={18} />
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
