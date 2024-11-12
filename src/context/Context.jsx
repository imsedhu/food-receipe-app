/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipeList, setReceipeList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const data = await res.json();
      if(data?.data?.recipes){
        setReceipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam('');
      }
    }catch(e){
      console.log(e);
      setLoading(false);
      setSearchParam('');
    }
    
  }

  console.log(loading, receipeList);
  return (
    <GlobalContext.Provider
    value={{
      searchParam,
      setSearchParam,
      handleSubmit,
      loading,
      receipeList,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}