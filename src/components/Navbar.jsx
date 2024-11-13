/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const Navbar = () => {

  const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

  
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <Link to={"/"}>Food Receipe</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={searchParam}
          onChange={(event)=> {setSearchParam(event.target.value)}}
          type="text"
          name="text"
          id="text"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          placeholder="Enter Items..."
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <Link
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
