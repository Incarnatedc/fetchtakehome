import { useContext, useEffect, useState } from "react";
import { getBreeds, getDogs, searchDogsAPI } from "../../service/dogs";
import { Navigate } from "react-router-dom";
import BreedSelector from "./BreedSelector";
import { MainContext } from "../../context/MainProvider";
import DogsCards from "./DogsCards";
import { SearchFilters } from "../../service/types";

const GENERAL_ERROR_MESSAGE = "Error fetching your next dog :( "

export default function DogsSearcher() {
  const { state, dispatch } = useContext(MainContext);
  const { searchResults, searchDogs, filters } = state;
  const [redirect, setRedirect] = useState(false);
  const [breeds, setBreeds] = useState<string[]>([]);
  const [loadingDogs, setLoadingDogs] = useState(false);
  const [errorDogs, setErrorDogs] = useState<string | null>(null);

  const fetchDogs = async () => {
    try {
      setLoadingDogs(true);
      const dogs = await getDogs(searchDogs.resultIds);
      dispatch({ type: 'setSearchResults', payload: dogs });
    } catch (error: any) {
      setErrorDogs(GENERAL_ERROR_MESSAGE);
    } finally {
      setLoadingDogs(false);
    }
  };

  const fetchDogsIDs = async () => {
    try {
      setLoadingDogs(true);
      const filter: SearchFilters = {
        // breeds: state.filters.breeds,
        sort: `${state.filters.sortField}:${state.filters.sortDirection}`,
        size: state.filters.itemsPerPage
      }
      if (state.filters.breeds.length > 0) filter.breeds = state.filters.breeds;
      const dogs = await searchDogsAPI(filter);
      dispatch({ type: 'setDogsSearch', payload: dogs });
    } catch (error: any) {
      // For now this is the only way to redirect to login when the session expires :(
      if(error.status === 401){
        setRedirect(true);
      }
      setLoadingDogs(false);
      setErrorDogs(GENERAL_ERROR_MESSAGE);
    }
  };

  //I'm gonna manage all the async data here I'm not pretty sure if it's ok but we'll see
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

  useEffect(() => {
    fetchDogs();
  }, [searchDogs.resultIds])

  useEffect(() =>{
    fetchDogsIDs();
  },[]);

  // If some filter changes, it must be automatically to update the results
  useEffect(() => {
    fetchDogsIDs();
  }, [state.filters])

  return (
    <div className="mx-auto max-w-6xl pt-4 mt-16 flex">
      {/* Filters Container */}
      <div className="w-full lg:w-1/4 md:w-1/3 p-4">
        <BreedSelector breeds={breeds}/>
      </div>
      <div className="w-full lg:w-3/4 p-4 md:w-2/3">
        {
          loadingDogs ? (
            <div>Fancy loading animation</div>
          ) : 
          errorDogs ? (
            <div className="text-red-600">{errorDogs}</div>
          ) :
          (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              <DogsCards dogs={searchResults}/>
            </div>
          )
        }
      </div>
      {redirect && <Navigate to='/login'/>}
    </div>
  );
}