import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Detail from "./components/Detail";
import SessionsLayout from "./components/Layouts/SessionsLayout";
import Contact from "./components/pages/Contact/Contact";
import HomePage from "./components/pages/Home";
import SearchDetail from "./components/pages/SearchDetail";
import SitePage from "./components/pages/Site";
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
              <SessionsLayout title={"Movies"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/tv-series"
          element={
            <DefaultLayout>
              <SessionsLayout title={"TV Series"} />
            </DefaultLayout>
          }
        />
        <Route
          path="/top-imdb"
          element={
            <DefaultLayout>
              <SessionsLayout title={"Top IMDB"} />
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
      </Routes>
    </div>
  );
}

export default App;
