import { useContext, useEffect, useState } from "react";
import { getBreeds } from "../../service/dogs";
import { Navigate } from "react-router-dom";
import BreedSelector from "./BreedSelector";
import { MainContext } from "../../context/MainProvider";
import DogsCards from "./DogsCards";

export default function DogsSearcher() {
  const { state } = useContext(MainContext);
  const { searchResults } = state;
  const [redirect, setRedirect] = useState(false);
  const [breeds, setBreeds] = useState<string[]>([]);
  //I'm gonna manages all the async data here I'm not pretty sure if it's ok but we'll see
  useEffect(() =>{
    const fetchBreeds = async () => {
      try {
        const breedList = await getBreeds();
        setBreeds(breedList);
      } catch (error: any) {
        // For now this is the only way to redirect to login when the session expires :(
        if(error.status === 401){
          setRedirect(true);
        }
      }
    };

    fetchBreeds();
  },[]);

  return (
    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 pt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
      <BreedSelector breeds={breeds}/>
      <DogsCards dogs={searchResults}/>
      {redirect && <Navigate to='/login'/>}
    </div>
  );
}