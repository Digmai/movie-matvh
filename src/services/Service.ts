import Mock from "../mock/mock";
import { typeMovie } from "../types";

const Service = {
  getMoviesData: async (count: number) => {
    return Mock.movieData(count);
  },
  getMovieDetailsData: async (id: string) => {
    return Mock.generateFakeMovieDetailsData("id*");
  },

  searchMovies: async (query: typeMovie) => {
    return Mock.searchData(Math.floor(Math.random() * 10), query);
  },

  getMovieDetails: async (imdbID: string) => {},
};

export default Service;
