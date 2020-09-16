import { put, call, select, takeLatest, all, delay } from "redux-saga/effects";
import { apiHiv1 } from "../../../services/api";
import * as GeneralActions from "../general/actions";

import {
  GetCommentRequestSuccess,
  CommentRequestSuccess,
  CommentChildrenSuccess,
  ProgressCourseSuccess,
} from "./actions";

// export function* getComments({ payload }) {
//   try {
//     const { token } = yield select((state) => state.auth);
//     const { course_slug, challenge_id } = payload;

//     yield put(GeneralActions.SetLoading({ loading: true }));

//     const response = yield call(
//       apiHiv1.get,
//       `/courses/${course_slug}/participations/?challenge=${challenge_id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield delay(2000);
//     yield put(GetCommentRequestSuccess(response.data));
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

// export function* makeComment({ payload }) {
//   try {
//     const { token } = yield select((state) => state.auth);
//     const { course_slug, challenge_id, bodyComment } = payload;

//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const createParticipation = yield call(
//       apiHiv1.post,
//       `/courses/${course_slug}/participations/`,
//       {
//         challenge: challenge_id,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     const { id } = createParticipation.data;

//     const createComment = yield call(
//       apiHiv1.patch,
//       `/courses/${course_slug}/participations/${id}/`,
//       {
//         comment: bodyComment,
//       },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     const response = yield call(
//       apiHiv1.get,
//       `/courses/${course_slug}/participations/?challenge=${challenge_id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield put(CommentRequestSuccess(createComment.data));
//     yield put(GetCommentRequestSuccess(response.data));
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

// export function* makeCommentChildren({ payload }) {
//   try {
//     const { token } = yield select((state) => state.auth);
//     const {
//       participation_id,
//       bodyComment,
//       course_slug,
//       challenge_id,
//     } = payload;

//     const { username } = yield select((state) => state.user.profile);

//     yield put(GeneralActions.SetLoading({ loading: true }));
//     const responseChildrenComment = yield call(
//       apiHiv1.post,
//       `/courses/${constant.service}/participations/${participation_id}/comments/`,
//       {
//         account: username,
//         participation: bodyComment,
//         text: bodyComment,
//       },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     const response = yield call(
//       apiHiv1.get,
//       `/courses/${course_slug}/participations/?challenge=${challenge_id}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     yield put(CommentChildrenSuccess(responseChildrenComment.data));
//     yield put(GetCommentRequestSuccess(response.data));
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

// export function* makeProgress({ payload }) {
//   try {
//     const { token } = yield select((state) => state.auth);
//     const { course_slug, challenge_id } = payload;

//     const response = yield call(
//       apiHiv1.post,
//       `/courses/${course_slug}/participations/`,
//       {
//         challenge: challenge_id,
//       },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     yield put(ProgressCourseSuccess(response.data));
//   } catch (error) {
//     yield put(GeneralActions.SetLoading({ loading: false }));

//     if (error.response && error.response.data && error.response.data.detail) {
//       yield put(
//         GeneralActions.SetError({ detail: error.response.data.detail })
//       );
//     }
//   }
// }

// export default all([
//   takeLatest("@participations/GET_COMMENTS_REQUEST", getComments),
//   takeLatest("@participations/COMMENTS_REQUEST", makeComment),
//   takeLatest("@participations/CHILDREN_COMMENT_REQUEST", makeCommentChildren),
//   takeLatest("@participation/PROGRESS_COURSE_REQUEST", makeProgress),
// ]);
