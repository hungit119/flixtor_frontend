export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/api"
    : "somedeployedURL";
export const ACCESS_TOKEN_NAME = "token";
export const NOTIFY_ALL_TOAST = "notify_all";
