import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Service from "../services/Service";
import { MovieData } from "../types";
import { useLoaderData } from "react-router-dom";

const MovieList = () => {
  const [moviesData, setMoviesData] = useState<MovieData[]>();

  const typeSearch = useLoaderData() as MovieData[];

  const date = typeSearch || moviesData;

  console.log(typeSearch);

  useEffect(() => {
    const fh = Service.getMoviesData(20);
    fh.then((e) => setMoviesData(e));
  }, []);

  return (
    <section className="pb-20">
      <div className="w-full h-auto pb-10 grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4">
        {date?.map((e, i) => (
          <MovieCard key={i} movieData={e} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
