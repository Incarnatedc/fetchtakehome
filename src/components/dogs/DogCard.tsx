import { Dog } from "../../context/types";

interface DogCardProps {
  dog: Dog
}

export default function DogCard({dog}: DogCardProps) {
  return (
    <div className="">
      {dog.name}
    </div>
  )
}