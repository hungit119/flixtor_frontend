import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import {
  authLoadingSelector,
  isAuthenticatedSelector,
  userRuleSelector,
} from "../../../../../redux/selectors";
import PropTypes from "prop-types";

const PermissionRouter = ({ children, permission }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const authLoading = useSelector(authLoadingSelector);
  const userRule = useSelector(userRuleSelector);
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
  return isAuthenticated && userRule >= permission ? (
    children
  ) : (
    <Navigate to={"/user/profile"} replace />
  );
};
PermissionRouter.propTypes = {
  children: PropTypes.node.isRequired,
  permission: PropTypes.number.isRequired,
};

export default PermissionRouter;
