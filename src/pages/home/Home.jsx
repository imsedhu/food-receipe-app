/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/RecipeItem";

const Home = () => {
  const { loading, receipeList} = useContext(GlobalContext);

  if (loading) return <div>Loading....Please Wait!</div>;
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {receipeList && receipeList.length > 0 ? (
        receipeList.map((item, index) => <RecipeItem key={item.id || index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to Show, Please search Something!
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
