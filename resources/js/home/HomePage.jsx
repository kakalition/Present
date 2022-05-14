import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import HomeActionGroupComponent from './components/component-group/HomeActionGroupComponent';
import FilterGroupComponent from './components/component-group/FilterGroupComponent';
import HomeContentComponent from './components/HomeContentComponent';

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  const [receivedData, setReceivedData] = useState([]);

  const onSubmitFilter = (params) => {
    axios
      .get('/stubget', { params })
      .then(
        (response) => setReceivedData(Object.values(response.data)),
      );
  };

  return (
    <div className="flex overflow-x-clip flex-col items-center min-h-screen bg-web-bg">
      <UIShellComponent username={username} />
      <div className="h-8" />
      <HomeActionGroupComponent />
      <div className="h-12" />
      <FilterGroupComponent
        itemName="Meditation"
        totalFound={18}
        onSubmitFilter={onSubmitFilter}
      />
      <div className="h-6" />
      <HomeContentComponent receivedData={receivedData} />
      <div className="h-12" />
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
