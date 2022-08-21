import { filmReducer } from "./filmReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");
const { filmsReducer } = require("./filmsReducer");

const rootReducer = combineReducers({
  films: filmsReducer,
  film: filmReducer,
  users: userReducer,
});

export default rootReducer;
