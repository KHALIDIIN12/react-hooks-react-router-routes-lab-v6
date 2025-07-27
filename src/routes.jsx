import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./components/Actors"; // ✅ correct import
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movie/:id", element: <Movie /> },
      { path: "/directors", element: <Directors /> },
      { path: "/actors", element: <Actors /> },
    ],
  },
];

export default routes;