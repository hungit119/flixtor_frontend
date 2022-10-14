import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DefaultLayout from "./components/DefaultLayout";
import { NOTIFY_ALL_TOAST } from "./constants";
import { publicRoutes } from "./routes";
function App() {
  return (
    <div className="App">
      <ToastContainer
        containerId={NOTIFY_ALL_TOAST}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout headerOnly={route.headerOnly}>
                  <Page
                    title={route.title}
                    root={route.root}
                    type={route.type}
                    feature={route.feature}
                  />
                </DefaultLayout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
