import AllComponents from './EmployeeScreens/AllComponents';
import React, { createContext, useState, useContext } from 'react';
import { MyProvider } from './mycontext';
function App() {
  const MyContext = createContext();

  return (

    <div>
     <MyProvider>
      <AllComponents/>
      </MyProvider>
    </div>
  );
}

export default App;
