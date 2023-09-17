import BreedItem from "./BreedItem";

type BreedSelectorProps = {
  breeds: string[]
}

export default function BreedSelector({breeds}: BreedSelectorProps) {
  return (
    <div className="">
      <h3>Choose your favorites breeds:</h3>
      <ul className="mt-6">
        {breeds.map((breed) => (
          <BreedItem key={breed} name={breed} />
        ))}
      </ul>
    </div>
  );
}