import { combineReducers } from "redux";

import auth from "./auth/reducer";
import course from "./course/reducer";
import user from "./user/reducer";
import general from "./general/reducer";
import participations from "./participations/reducer";

export default combineReducers({
  course,
});
