import React from "react";
import { Link } from "react-router-dom";
import { MovieData } from "../types";

interface Props {
  movieData: MovieData;
}

const MovieCard: React.FC<Props> = ({ movieData }) => {
  return (
    <Link
      to="/watch"
      className="w-full aspect-[1/1.3] relative rounded inline-block overflow-hidden border border-neutral-500"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img
        className="relative left-0 top-0 w-full h-full z-0 object-cover "
        src={movieData.Poster}
        alt="imdbID"
      />
      <div className="absolute left-0 top-0 w-full h-full z-10  bg-gradient-to-b from-white/5 to-slate-900/70"></div>
      <div className="p-2 w-full absolute bottom-0 left-0  flex flex-col font-serif z-20">
        <h2 className=" sm:h-14 text-center text-white uppercase text-sm lg:text-sm">
          {movieData.Title}
        </h2>
        <div className="flex justify-between lowercase text-xs sm:text-sm/7 mt-2 text-slate-400">
          <p>{movieData.Type}</p>
          <p>{movieData.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
