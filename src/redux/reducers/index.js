import { filmAdminReducer } from "./filmAdminReducer";
import { filmsReducer } from "./filmsReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");
const { filmsAdminReducer } = require("./filmsAdminReducer");

const rootReducer = combineReducers({
  filmsAdmin: filmsAdminReducer,
  filmAdmin: filmAdminReducer,
  films: filmsReducer,
  users: userReducer,
});

export default rootReducer;
