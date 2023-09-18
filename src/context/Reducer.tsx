import { MainActions, MainState } from "./types";

export function Reducer(state: MainState, action: MainActions) {
  // console.log("Reducer", action);
  switch (action.type) {
    case 'addBreed':
      return {
        ...state,
        filters: {
          ...state.filters,
          breeds: [...state.filters.breeds, action.payload],
        },
      };
    case 'removeBreed':
      return {
        ...state,
        filters: {
          ...state.filters,
          breeds: state.filters.breeds.filter((breed) => breed !== action.payload),
        },
      };
    case 'setSortSetting':
      const { field, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          sortField: field,
          sortDirection: value
        }
      }
    case 'setSearchResults':
      return {
        ...state,
        searchResults: action.payload,
      };
    case 'resetBreedFilter':
      return {
        ...state,
        filters: {
          ...state.filters,
          breeds: []
        }
      }
    case 'setDogsSearch':
      return {
        ...state,
        searchDogs: action.payload,
      };
    case 'setDogsIDs':
      return {
        ...state,
        dogsIDs: action.payload,
      };
    case 'addFavoriteDog':
        return {
          ...state,
          favoriteDogs: [...state.favoriteDogs, action.payload]
        }
    case 'removeFavoriteDog':
      return {
        ...state,
        favoriteDogs: state.favoriteDogs.filter((dog) => dog.id !== action.payload.id)
      }
    default:
      return {...state};
  }
  return {...state};
}