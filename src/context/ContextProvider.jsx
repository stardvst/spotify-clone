import { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export const ContextProvider = ({ initialState, reducer, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useContextProviderValue = () => useContext(Context);
