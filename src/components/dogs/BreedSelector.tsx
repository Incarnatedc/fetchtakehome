import { useContext } from "react";
import BreedItem from "./BreedItem";
import { MainContext } from "../../context/MainProvider";
import { FiArrowUp,FiArrowDown } from 'react-icons/fi';

type BreedSelectorProps = {
  breeds: string[]
}

export default function BreedSelector({breeds}: BreedSelectorProps) {
  const {state, dispatch} = useContext(MainContext);
  const {filters} = state;
  const currentOrder = filters.sortDirection;
  const toggleSortDirection = () => {
    const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
    dispatch({ type: 'setSortSetting', payload: { field: 'breed', value: newOrder } });
  };

  const clearBreedFilter = () => {
    dispatch({ type: 'resetBreedFilter', payload: null });
  };

  return (
    <div className="">
      <h3 className="text-xl font-semibold">Available Breeds:</h3>
      <div className="flex space-x-2 mt-2">
        <button
          className="flex items-center justify-center px-2 py-1 text-sm text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleSortDirection}
        >
          Breed sort
          {currentOrder === 'asc' ? <FiArrowUp className="mr-1" /> : <FiArrowDown className="mr-1" />}
        </button>
        <button
          className="flex items-center justify-center px-2 py-1 text-sm text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={clearBreedFilter}
        >
          Clear
        </button>
      </div>
      <ul className="mt-6">
        {breeds.map((breed) => (
          <BreedItem key={breed} name={breed} />
        ))}
      </ul>
    </div>
  );
}