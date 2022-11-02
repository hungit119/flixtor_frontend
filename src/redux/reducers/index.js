import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import { controlReducer } from "./controlReducer";
import { filmAdminReducer } from "./filmAdminReducer";
import { filmReducer } from "./filmReducer";
import filmsFilterReducer from "./filmsFilterReducer";
import { filmsReducer } from "./filmsReducer";
import { searchReaducer } from "./searchReducer";
import { userReducer } from "./userReducer";

const { combineReducers } = require("redux");
const { filmsAdminReducer } = require("./filmsAdminReducer");

const rootReducer = combineReducers({
  filmsAdmin: filmsAdminReducer,
  filmAdmin: filmAdminReducer,
  films: filmsReducer,
  filmsFilter: filmsFilterReducer,
  film: filmReducer,
  search: searchReaducer,
  user: userReducer,
  control: controlReducer,
  admin: adminReducer,
  auth: authReducer,
});

export default rootReducer;
