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

export interface SortValue {
  field: string;
  value: 'asc' | 'desc'
}

// I'm running out of ideas of names :(
export interface CurrentSearch {
  next: string;
  resultIds: [];
  total: number
}
// Main state of the app
export interface MainState {
  dogsIDs: string[];
  searchResults: Dog[];
  favoriteDogs: Dog[];
  matchDog: Dog | null;
  searchDogs: CurrentSearch
  filters: {
    breeds: string[];
    sortField: string;
    sortDirection: 'asc' | 'desc';
    currentPage: number;
    itemsPerPage: number;
  };
}

export interface SetSortSetting {
  type: 'setSortSetting';
  payload: SortValue
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

export interface SetSearchResults {
  type: 'setSearchResults';
  payload: Dog[]
}

export interface SetDogsSearch {
  type: 'setDogsSearch';
  payload: CurrentSearch
}

export interface SetDogsIDs {
  type: 'setDogsIDs';
  payload: string[]
}

export interface AddFavoriteDog {
  type: 'addFavoriteDog';
  payload: Dog
}

export interface RemoveFavoriteDog {
  type: 'removeFavoriteDog';
  payload: Dog
}

export interface ResetBreedFilter {
  type: 'resetBreedFilter',
  payload: null
}

export type MainActions = (
  AddBreed |
  RemoveBreed |
  SetDogsIDs |
  SetSearchResults |
  AddFavoriteDog |
  RemoveFavoriteDog |
  SetSortSetting |
  SetDogsSearch | 
  ResetBreedFilter
)