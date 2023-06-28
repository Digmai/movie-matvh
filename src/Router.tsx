import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from "./components/MovieList";
import WatchList from "./components/WatchList";
import Service from "./services/Service";
import { typeMovie } from "./types";

export const Router: React.FC<{
  Layout: ({ children }: { children: JSX.Element }) => JSX.Element;
}> = ({ Layout }) => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <Layout>
              <MovieList />
            </Layout>
          ),
        },
        {
          path: "/:typeSearch",
          loader: ({ params }) => {
            return Service.searchMovies(params.typeSearch as typeMovie);
          },
          element: (
            <Layout>
              <MovieList />
            </Layout>
          ),
        },
        {
          path: "watch",
          element: (
            <Layout>
              <WatchList />
            </Layout>
          ),
        },
      ])}
    />
  );
};
