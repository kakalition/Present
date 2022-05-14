import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import HomeActionGroupComponent from './components/component-group/HomeActionGroupComponent';
import FilterGroupComponent from './components/component-group/FilterGroupComponent';
import ItemTileComponent from './components/ItemTileComponent';

function Content(props) {
  const content = props.retri.map((element) => (
    <ItemTileComponent
      key={element.shortDescription}
      title={element.title}
      tag={element.tag}
      shortDescription={element.shortDescription}
    />
  ));

  return (
    <div className="grid grid-cols-4 gap-4 px-16 w-full">
      {content}
    </div>
  );
}

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  const [retri, setRetri] = useState([]);

  // For Development Only
  const onSubmitFilter = (params) => {
    axios
      .get('/stubget', { params })
      .then(
        (response) => setRetri(Object.values(response.data)),
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
      <Content retri={retri} />
      <div className="h-12" />
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
