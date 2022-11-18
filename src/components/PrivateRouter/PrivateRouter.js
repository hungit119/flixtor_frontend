import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  authLoadingSelector,
  isAuthenticatedSelector,
} from "../../redux/selectors";
import BounceLoader from "react-spinners/BounceLoader";
import PropTypes from "prop-types";
const PrivateRouter = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const authLoading = useSelector(authLoadingSelector);
  if (!isAuthenticated && authLoading)
    return (
      <div
        style={{
          width: "100%",
          height: "700px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BounceLoader color="#118395" />
      </div>
    );
  return isAuthenticated ? children : <Navigate to={"/"} replace />;
};

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouter;
