import { all, put, takeLatest, call, select, delay } from "redux-saga/effects";
import { apiHiv2, apiHiv1 } from "../../../services/api";
import * as GeneralActions from "../general/actions";

import {
  GetAllCoursesSuccess,
  GetAllBannersRequestSuccess,
  GetAllCategoriesRequestSuccess,
  GetAllPaidCoursesSuccess,
  GetAllSubscriptionsSuccess,
  GetCourseByIdSuccess,
  GetUnitsByCourseSuccess,
  GetAllCoursesPaginatedSuccess,
  GetUnitDetailSuccess,
  SubscriptionOnCourseSuccess,
  GetSuggestedCoursesSuccess,
} from "./actions";

export function* getAllCourses({ payload }) {
  const { service } = payload;

  try {
    yield put(GeneralActions.SetLoading({ loading: true }));
    const response = yield call(apiHiv2.get, `/courses/${service}/all/`);

    yield put(GetAllCoursesSuccess(response.data.courses));
    yield put(GeneralActions.SetLoading({ loading: false }));
  } catch (error) {
    console.log(error.response);
    if (error.response && error.response.data && error.response.data.detail) {
      yield put(
        GeneralActions.SetError({ detail: error.response.data.detail })
      );
      yield put(GeneralActions.SetLoading({ loading: false }));
    }
  }
}

// export function* getSuggestedCourses() {
//   try {
//     const response = yield call(
//       apiHiv2.get,
//       `/courses/${constant.service}/paginated/1/`
//     );

//     yield put(GetSuggestedCoursesSuccess(response.data.results));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data && error.response.data.detail) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* getAllCoursesPaginated({ payload }) {
//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const { page } = payload;

//     const response = yield call(
//       apiHiv2.get,
//       `/courses/${constant.service}/paginated/${page}/`
//     );

//     yield put(GetAllCoursesPaginatedSuccess(response.data));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     console.log(error);
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   }
// }

// export function* getAllPaidCourses() {
//   const { token } = yield select((state) => state.auth);

//   yield put(GeneralActions.SetLoading({ loading: true }));
//   try {
//     const response = yield call(
//       apiHiv2.get,
//       `/courses/${constant.service}/paidcourses`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield put(GetAllPaidCoursesSuccess(response.data.paidCourses));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* getAllBanners() {
//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const response = yield call(
//       apiHiv2.get,
//       `/courses/${constant.service}/banners`
//     );

//     yield put(GetAllBannersRequestSuccess(response.data.banners));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* getAllCategories() {
//   try {
//     const response = yield call(
//       apiHiv2,
//       `/courses/${constant.service}/categories/`
//     );

//     const { categories } = response.data;
//     yield put(GetAllCategoriesRequestSuccess(categories));
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function* getAllSubscriptions() {
//   const { token } = yield select((state) => state.auth);

//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const response = yield call(
//       apiHiv2.get,
//       `/courses/${constant.service}/subscriptions`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield put(GetAllSubscriptionsSuccess(response.data.subscriptions));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* subscriptionOnCourse({ payload }) {
//   const { course_slug, unit } = payload;

//   try {
//     const { token } = yield select((state) => state.auth);

//     yield put(GeneralActions.SetLoading({ loading: true }));

//     const response = yield call(
//       apiHiv1.post,
//       `/courses/${course_slug}/subscribe/`,
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     //history.push(`/courses/${course_slug}/units/${unit}/`);

//     yield put(SubscriptionOnCourseSuccess(response.data));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function* getCoursebyId({ payload }) {
//   try {
//     const { id } = payload;
//     const { token } = yield select((state) => state.auth);

//     yield put(GeneralActions.SetLoading({ loading: true }));

//     const response = yield call(apiHiv1.get, `/courses/${id}/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     yield put(GetCourseByIdSuccess(response.data));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data && error.response.data.detail) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* getUnitsByCourse({ payload }) {
//   const { id } = payload;
//   const { token } = yield select((state) => state.auth);

//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const response = yield call(apiHiv1.get, `/courses/${id}/units/`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     yield put(GetUnitsByCourseSuccess(response.data));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data && error.response.data.detail) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export function* getDetailUnit({ payload }) {
//   const { id, hash_id } = payload;
//   const { token } = yield select((state) => state.auth);

//   try {
//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const response = yield call(
//       apiHiv1.get,
//       `/courses/${id}/units/${hash_id}/`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield delay(3000);
//     yield put(GetUnitDetailSuccess(response.data));
//     yield put(GeneralActions.SetLoading({ loading: false }));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data && error.response.data.detail) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

export default all([
  takeLatest("@courses/GET_ALL_COURSES_REQUEST", getAllCourses),
  // takeLatest("@courses/GET_ALL_PAIDCOURSES_REQUEST", getAllPaidCourses),
  // takeLatest("@courses/GET_ALL_BANNERS_REQUEST", getAllBanners),
  // takeLatest("@courses/GET_ALL_CATEGORIES_REQUEST", getAllCategories),
  // takeLatest("@courses/GET_ALL_SUBSCRIPTIONS_REQUEST", getAllSubscriptions),
  // takeLatest("@courses/COURSE_BY_ID_REQUEST", getCoursebyId),
  // takeLatest("@courses/UNITS_BY_COURSE_REQUEST", getUnitsByCourse),
  // takeLatest("@courses/SUBSCRIPTION_ON_COURSE_REQUEST", subscriptionOnCourse),
  // takeLatest(
  //   "@courses/GET_ALL_COURSES_PAGINATED_REQUEST",
  //   getAllCoursesPaginated
  // ),
  // takeLatest("@courses/UNIT_DETAIL_REQUEST", getDetailUnit),
  // takeLatest("@courses/GET_SUGGESTED_COURSES_REQUEST", getSuggestedCourses),
]);
