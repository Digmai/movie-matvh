import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const type = ["movie", "series", "episode"];

  return (
    <div className="w-full flex  bg-slate-400/40 p-8 my-4 flex-col sm:flex-row-reverse ">
      <input
        className="w-full rounded sm:w-1/4 mx-auto sm:mx-8 sm:my-1  "
        placeholder="Search"
      />

      <nav className="w-full  sm:w-3/4  bg-slate-400/70 text-slate-50 flex flex-col sm:flex-row-reverse my-2 sm:my-1 p-4 sm:p-0 ">
        {type.map((e, i) => (
          <Link
            key={e + i}
            className="  rounded my-1 sm:mx-4 p-2 bg-slate-500/80"
            to={"/" + e}
          >
            {e.toLocaleUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SearchBar;
