// MyContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [results, setResults] = useState(null);

  // You can define any functions to update the data here

  return (
    <MyContext.Provider value={{ results,setResults }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to access the context
export const useMyContext = () => {
  return useContext(MyContext);
};
