import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import AddButtonComponent from './components/AddButtonComponent';
import SearchBarComponent from './components/SearchBarComponent';

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <UIShellComponent username={username} />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row items-center w-[90%]">
          <div className="basis-1/2"><SearchBarComponent /></div>
          <div className="w-8" />
          <div className="basis-1/4"><AddButtonComponent text="New Meditation" background="bg-gradient-to-bl from-blue-700 to-sky-400" clickCallback={() => {}} fillSpace /></div>
          <div className="w-8" />
          <div className="basis-1/4"><AddButtonComponent text="New Breathing Exercise" background="bg-gradient-to-bl from-orange-600 to-orange-300" clickCallback={() => {}} fillSpace /></div>

        </div>

      </div>
    </div>
  );
}

elementBinder('home-view', <HomePage />);
