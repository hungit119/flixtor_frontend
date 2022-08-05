import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
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
          path="/home/*"
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
      </Routes>
    </div>
  );
}

export default App;
