import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { MainState } from "./types";
import { MainContextValue } from "./types";

const initialState: MainState = {
  searchResults: [],
  favoriteDogs: [],
  matchDog: null,
  filters: {
    breeds: [],
    currentPage: 1,
    itemsPerPage: 20,
    sortDirection: 'asc',
    sortField: 'breed'
  },
}

type ProviderProps = {
  children: React.ReactElement
}

export const MainContext = createContext<MainContextValue>({
	state: initialState,
	dispatch: () => { throw new Error('MainContext not initialized') },
})

export default function MainProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
}