import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Detail from "./components/pages/Detail";
import SessionsLayout from "./components/Layouts/SessionsLayout";
import Admin from "./components/pages/Admin";
import Contact from "./components/pages/Contact/Contact";
import HomePage from "./components/pages/Home";
import SearchDetail from "./components/pages/SearchDetail";
import SitePage from "./components/pages/Site";
import FilmsFilter from "./components/pages/FilmsFilter/FilmsFilter";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <SitePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/home/:param"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/movies"
          element={
            <DefaultLayout>
              <SessionsLayout title={"Movies"} root={"movie"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/tv-series"
          element={
            <DefaultLayout>
              <SessionsLayout title={"TV Series"} root={"tv-series"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/top-imdb"
          element={
            <DefaultLayout>
              <SessionsLayout title={"Top IMDB"} root={"top-imdb"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/:key/:type"
          element={
            <DefaultLayout>
              <SearchDetail />
            </DefaultLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <DefaultLayout>
              <Detail type={"Movies"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/tv/:id"
          element={
            <DefaultLayout>
              <Detail type={"TV-Series"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/admin/*"
          element={
            <DefaultLayout headerOnly={true}>
              <Admin />
            </DefaultLayout>
          }
        />
        <Route
          path="/films-filter/:redirect"
          element={
            <DefaultLayout>
              <FilmsFilter />
            </DefaultLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
