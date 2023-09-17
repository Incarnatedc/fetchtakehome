import { Dog } from "../../context/types";
import DogCard from "./DogCard";

interface DogsCardsProps {
  dogs: Dog[]
}

export default function DogsCards({dogs}: DogsCardsProps) {
  return (
    <div>
      {dogs && dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
}