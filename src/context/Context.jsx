/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipeList, setReceipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);

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
    }catch(error){
      console.log(error);
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
      recipeDetailsData,
      setRecipeDetailsData,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}