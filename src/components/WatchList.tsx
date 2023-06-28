import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../services/Service";
import { MovieDetailsData } from "../types";

const WatchList = () => {
  const [movieData, setMovieData] = useState<MovieDetailsData>();

  useEffect(() => {
    const fh = Service.getMovieDetailsData("id*");
    fh.then((e) => setMovieData(e));
  }, []);

  return (
    <main className="bg-neutral-900/10 box-border">
      <section className=" grid grid-cols-1">
        <section className=" grid sm:grid-cols-2 grid-cols-1 gap-4 m-8 ">
          <div className="   aspect-[1/min-content] p-4 bg-slate-400/40">
            <img
              className="relative  left-0 top-0z-0 object-cover  border-solid border-slate-400 border-8"
              src={movieData?.Poster}
              alt="imdbID"
            />
          </div>

          <div className=" aspect-[1/auto] w-full p-4 bg-slate-400/40">
            <strong className="uppercase text-xl text-yellow-50">
              <p className="text-center ms:text-justify">{movieData?.Title}</p>
            </strong>
            <p>Year: {movieData?.Year}</p>
            <p>Runtime: {movieData?.Runtime}</p>
            <p>Genre: {movieData?.Genre}</p>
            <p>Director: {movieData?.Director}</p>
            <p>Writer: {movieData?.Writer}</p>
            <p>Actors: {movieData?.Actors}</p>
            <p>imdbRating: {movieData?.imdbRating}</p>
            <p className="text-justify">Plot: {movieData?.Plot}</p>
          </div>
        </section>

        <section className="aspect-video bg-slate-400/40 m-8 text-yellow-50 flex items-center justify-center">
          video
        </section>
      </section>
    </main>
  );
};

export default WatchList;
