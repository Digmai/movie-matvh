import { faker } from "@faker-js/faker";
import { MovieData, MovieDetailsData, typeMovie } from "../types";

const typeArrey: typeMovie[] = ["movie", "series", "episode"];
const TypeMovie = typeArrey[Math.floor(Math.random() * typeArrey.length)];

class Mock {
  public async generateFakeMovieDetailsData(
    id: string
  ): Promise<MovieDetailsData> {
    return {
      imdbID: faker.random.alphaNumeric(9),
      Title: faker.lorem.words(3),
      Year: faker.date.past().getFullYear().toString(),
      Plot: faker.lorem.paragraphs(),
      Released: faker.date.past().toDateString(),
      Runtime: faker.random.numeric(3).toString() + " min",
      Genre: faker.random.word(),
      Director: faker.name.fullName(),
      Writer: faker.name.fullName(),
      Actors: faker.lorem.words(3),
      // Poster: faker.image.imageUrl(),
      Poster: "./logo512.png",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: faker.random.numeric(1).toString(),
        },
        {
          Source: "Rotten Tomatoes",
          Value: faker.random.numeric(2).toString() + "%",
        },
        { Source: "Metacritic", Value: faker.random.numeric(2).toString() },
      ],
      imdbRating: faker.random.numeric(10).toString(),
      Type: TypeMovie,
    };
  }

  public async movieData(count: number): Promise<MovieData[]> {
    return faker.helpers.multiple(this.generateFakeMovieData(), {
      count,
    });
  }

  public async searchData(
    count: number,
    value: typeMovie
  ): Promise<MovieData[]> {
    return faker.helpers.multiple(this.generateFakeMovieData(value), {
      count,
    });
  }

  private generateFakeMovieData(type?: typeMovie) {
    return (): MovieData => {
      return {
        Title: faker.lorem.words(3),
        Year: faker.date.past().getFullYear().toString(),
        imdbID: faker.random.alphaNumeric(9),
        Type: type ? type : TypeMovie,
        Poster: "./logo512.png", // Poster: faker.image.imageUrl(),
      };
    };
  }
}

export default new Mock();
