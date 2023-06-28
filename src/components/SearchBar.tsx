import React from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const type = { movie: "movie", series: "series", episode: "episode" };

  return (
    <div className="w-full flex  bg-slate-400/40 p-8 my-4">
      <nav className="w-3/4 bg-slate-400/70 text-slate-50 flex">
        <Link
          className=" rounded mx-4 p-2 bg-slate-500/80"
          to={"/" + type.series}
        >
          {type.series.toLocaleUpperCase()}
        </Link>
        <Link
          className="rounded mx-4 p-2 bg-slate-500/80"
          to={"/" + type.movie}
        >
          {type.movie.toLocaleUpperCase()}
        </Link>
        <Link
          className=" rounded mx-4 p-2  bg-slate-500/80"
          to={"/" + type.episode}
        >
          {type.episode.toLocaleUpperCase()}
        </Link>
      </nav>

      <input
        className="w-1/4 placeholder:bg-slate-400/100 mx-8 border-slate-100 border-2 text-indigo-300 bg-slate-950 "
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
