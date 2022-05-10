import PropTypes from 'prop-types';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import AddButtonComponent from './components/AddButtonComponent';
import ChipComponent from './components/ChipComponent';
import SearchBarComponent from './components/SearchBarComponent';

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

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <UIShellComponent username={username} />
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div className="h-8" />
        <TopOne />
        <div className="h-8" />
        <div className="flex flex-row">
          <ChipComponent text="Breathing exercise" isActive={false} />
          <div className="w-4" />
          <ChipComponent text="Meditation" isActive />
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
