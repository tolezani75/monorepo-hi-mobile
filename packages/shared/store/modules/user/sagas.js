import { all, put, takeLatest, call, select, delay } from "redux-saga/effects";
import {
  apiHiv2,
  apiHiv1,
  apiUatHiv2,
  apiUatHiv1,
} from "../../../services/api";

import * as GeneralActions from "../general/actions";

import {
  GetProfileUserRequsestSuccess,
  UpdatePasswordSuccess,
  GetCoursesInProgressSuccess,
  UpdateNameSuccess,
} from "./actions";

// export function* getProfile() {
//   const { token } = yield select((state) => state.auth);

//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));

//     const response = yield call(
//       apiHiv2.get,
//       `/courses/${constant.service}/profile/me`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield delay(2000);
//     yield put(GetProfileUserRequsestSuccess(response.data));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));
//     yield put(GeneralActions.SetError({ detail: error.response.data.detail }));
//   }
// }

// export function* updatePassword({ payload }) {
//   const { oldPassword, newPassword } = payload;
//   const { token } = yield select((state) => state.auth);

//   try {
//     const response = yield call(
//       apiHiv1.post,
//       `/auth/password-change/`,
//       { oldPassword, newPassword },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     yield put(UpdatePasswordSuccess(response.data));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response.data.code === "fields-error") {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     } else {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* updateName({ payload }) {
//   const { name } = payload;
//   const { token } = yield select((state) => state.auth);

//   try {
//     const response = yield call(
//       apiHiv1.patch,
//       `/courses/${constant.service}/accounts/me/`,
//       { name },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     yield put(UpdateNameSuccess(response.data));

//     window.location.reload();
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));
//     yield put(GeneralActions.SetError({ detail: error.response.data.detail }));
//   }
// }

// export function* getUnitsInProgress({ payload }) {
//   const { id } = payload;
//   const { token } = yield select((state) => state.auth);

//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const response = yield call(apiHiv1.get, `/courses/${id}/units/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     yield put(GetCoursesInProgressSuccess(response.data));
//     yield put(GeneralActions.SetOpen({ openUnit: true }));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));
//     yield put(GeneralActions.SetError({ detail: error.response.data.detail }));
//   }
// }

// export default all([
//   takeLatest("@profile/PROFILE_REQUEST", getProfile),
//   takeLatest("@profile/COURSE_IN_PROGRESS_REQUEST", getUnitsInProgress),
//   takeLatest("@profile/UPDATE_NAME_REQUEST", updateName),
//   takeLatest("@profile/UPDATE_PASSWORD_REQUEST", updatePassword),
// ]);
