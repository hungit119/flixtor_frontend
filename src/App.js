import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextApi from "./components/ContextApi";
import DefaultLayout from "./components/DefaultLayout";
import PrivateRouter from "./components/PrivateRouter";
import { NOTIFY_ALL_TOAST } from "./constants";
import { privateRoutes, publicRoutes } from "./routes";
function App() {
  return (
    <div className="App">
      <ContextApi>
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
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRouter>
                    <DefaultLayout headerOnly={route.headerOnly}>
                      <Page
                        title={route.title}
                        root={route.root}
                        type={route.type}
                        feature={route.feature}
                      />
                    </DefaultLayout>
                  </PrivateRouter>
                }
              />
            );
          })}
        </Routes>
      </ContextApi>
    </div>
  );
}

export default App;
