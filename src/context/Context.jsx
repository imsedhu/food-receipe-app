/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){

  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipeList, setReceipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([])

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
      const data = await res.json();
      if(data?.data?.recipes){
        setReceipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam('');
        navigate("/");
      }
    }catch(error){
      console.log(error);
      setLoading(false);
      setSearchParam('');
    }
    
  }

  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(item=> item.id === getCurrentItem.id)

    if(index === -1) {
      cpyFavoritesList.push(getCurrentItem)
    } else {
      cpyFavoritesList.splice(index, 1)
    }

    setFavoritesList(cpyFavoritesList)
  }

  console.log(favoritesList, 'favoritesList');

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
      handleAddToFavorite,
      favoritesList
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}