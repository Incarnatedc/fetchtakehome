import { MainActions, MainState } from "./types";

export function Reducer(state: MainState, action: MainActions) {
  console.log("Reducer", action);
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
    default:
      return {...state};
  }
  return {...state};
}