import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import AddButtonComponent from './components/AddButtonComponent';

function logout() {
  axios.post('/logout').then(() => window.location.assign('/'));
}

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/, '').replace(/[+]/, ' ');

  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <UIShellComponent username={username} />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row w-[80%]">
          <AddButtonComponent text="New Meditation" background="bg-gradient-to-bl from-blue-700 to-sky-400" clickCallback={() => {}} fillSpace />
          <div className="w-8" />
          <AddButtonComponent text="New Breathing Exercise" background="bg-gradient-to-bl from-orange-600 to-orange-300" clickCallback={() => {}} fillSpace />
        </div>

      </div>
    </div>
  );
}

elementBinder('home-view', <HomePage />);
