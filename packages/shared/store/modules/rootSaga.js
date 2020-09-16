import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import course from "./course/sagas";
import user from "./user/sagas";
import participations from "./participations/sagas";

export default function* rootSaga() {
  return yield all([course]);
}
