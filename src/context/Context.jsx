/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  return (
    <GlobalContext.Provider
    value={{
      searchParam,
      setSearchParam,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}