import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
      <div className="text-center text-base uppercase pt-8 font-bold font-serif w-full pb-10">
        <div className="flex justify-center items-center">
          <span className="text-2xl sm:text-6xl italic leading-tight pr-1 text-orange-50">
            movie
          </span>
          <span className="text-1xl sm:text-5xl text-justify text-indigo-950">
            -match
          </span>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
