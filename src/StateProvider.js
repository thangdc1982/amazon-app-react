import React, { createContext, useContext, useReducer } from 'react';

// Create context (data layer)
// CreateContext returns an object with a Provider and a Consumer
export const StateContext = createContext();

// Wrap our app and provide the data layer
// Provider component is what makes the state available to all children
// Provide receives a value prop, where the current state is passed current value
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);