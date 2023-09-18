import { useContext } from "react"
import { FaStar } from "react-icons/fa"
import { Dog } from "../../context/types"
import { MainContext } from "../../context/MainProvider"

interface DogCardProps {
  dog: Dog
}

export default function DogCard({dog}: DogCardProps) {
  const { state, dispatch } = useContext(MainContext);
  const { favoriteDogs } = state;
  const isFavorite = favoriteDogs.some((favoriteDog:Dog) => favoriteDog.id === dog.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'removeFavoriteDog', payload: dog });
    } else {
      dispatch({ type: 'addFavoriteDog', payload: dog });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative max-w-xs mx-auto hover:transform hover:scale-105 duration-300">
      <img
        className="w-full h-48 object-cover"
        src={dog.img}
        alt={dog.name}
      />
      <button
        className={`absolute top-2 right-2 z-10 text-xl p-2 rounded-full ${
          isFavorite ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
        onClick={toggleFavorite}
      >
        <FaStar />
      </button>

      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{dog.name}</h2>
        <div className="text-gray-600 mb-2">
          <span className="font-semibold">Age:</span> {dog.age}
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-semibold">Zip Code:</span> {dog.zip_code}
        </div>
        <div className="text-gray-600">
          <span className="font-semibold">Breed:</span> {dog.breed}
        </div>
      </div>
    </div>
  );
}