export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}
interface Location {
  zip_code: string
  latitude: number
  longitude: number
  city: string
  state: string
  county: string
}
interface Coordinates {
  lat: number;
  lon: number;
}
export interface MainContextValue {
	state: MainState
	dispatch: React.Dispatch<MainActions>
}
// Main state of the app
export interface MainState {
  searchResults: Dog[];
  favoriteDogs: Dog[];
  matchDog: Dog | null;
  filters: {
    breeds: string[];
    sortField: string;
    sortDirection: 'asc' | 'desc';
    currentPage: number;
    itemsPerPage: number;
  };
}
// Actions of the app

export interface AddBreed {
  type: 'addBreed';
  payload: string
}

export interface RemoveBreed {
  type: 'removeBreed';
  payload: string
}

export interface SearchDogs {
  type: 'searchDogs';
  
}

export type MainActions = (
  AddBreed |
  RemoveBreed
)