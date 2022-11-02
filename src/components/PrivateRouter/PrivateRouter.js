import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const auth = true;
  return auth ? children : <Navigate to={"/"} />;
};

export default PrivateRouter;
