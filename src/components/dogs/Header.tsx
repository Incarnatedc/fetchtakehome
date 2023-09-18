import { useContext } from 'react';
import { TbDog } from 'react-icons/tb';
import Logo from '../ui/Logo';
import LogoutButton from './LogoutButton';
import { MainContext } from '../../context/MainProvider';

export default function Header() {
  const { state } = useContext(MainContext);
  const {favoriteDogs} = state;
  return (
    <header className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Logo className="w-12 h-12 mr-4" />
          {/* TODO application */}
          <h1 className="text-2xl font-semibold">PawsomeMatch</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <TbDog className="text-xl" />
            <span className="ml-2">{favoriteDogs.length}</span>
          </div>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
