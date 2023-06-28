import { type } from "os";

// Определяем интерфейс MovieData для типизации объектов фильма, получаемых в результате поиска
export interface MovieData {
  Title: string; // Название фильма
  Year: string; // Год выпуска фильма
  imdbID: string; // Уникальный идентификатор фильма на IMDB
  Type: typeMovie; // Тип фильма (например, movie, series, episode)
  Poster: string; // URL постера фильма
}

// Определяем интерфейс MovieDetailsData для типизации детальной информации о фильме
export interface MovieDetailsData {
  imdbID: string; // Уникальный идентификатор фильма на IMDB
  Title: string; // Название фильма
  Year: string; // Год выпуска фильма
  Plot: string; // Описание сюжета фильма
  Released: string; // Дата выпуска фильма
  Runtime: string; // Продолжительность фильма
  Genre: string; // Жанр фильма
  Director: string; // Режиссер фильма
  Writer: string; // Автор сценария фильма
  Actors: string; // Актерский состав фильма
  Poster: string; // URL постера фильма
  Ratings: Array<any>; // Рейтинг фильма на различных ресурсах
  imdbRating: string; // Рейтинг фильма на IMDB
  Type: typeMovie; // Тип фильма (например, movie, series, episode)
}

export type typeMovie = "movie" | "series" | "episode";
