import { useContext } from "react"
import { MainContext } from "../../context/MainProvider"

interface BreedItemProps {
  name: string
  key: string
}

export default function BreedItem({name, ...props}: BreedItemProps) {
  const {state, dispatch} = useContext(MainContext);
  const isChecked = state.filters.breeds.includes(name);
  const handleChange = () => {
    console.log("Handlechange");
    if (isChecked) {
      // If the breed is already in the filters, remove it
      dispatch({ type: 'removeBreed', payload: name });
    } else {
      // If the breed is not in the filters, add it
      console.log("addBreed: ", name);
      dispatch({ type: 'addBreed', payload: name });
    }
  }

  return (
    <div className="flex mb-2" {...props}>
      <input 
      id={`BreedItem-${name}`} 
      type="checkbox" 
      className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
      checked={isChecked}
      onChange={handleChange}
      />
      <label htmlFor={`BreedItem-${name}`} className="text-sm ml-3 font-medium text-gray-900">{name}</label>
    </div>
  );
}