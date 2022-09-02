import { filmAdminReducer } from "./filmAdminReducer";
import { filmReducer } from "./filmReducer";
import { filmsReducer } from "./filmsReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");
const { filmsAdminReducer } = require("./filmsAdminReducer");

const rootReducer = combineReducers({
  filmsAdmin: filmsAdminReducer,
  filmAdmin: filmAdminReducer,
  films: filmsReducer,
  film: filmReducer,
  users: userReducer,
});

export default rootReducer;
