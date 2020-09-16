export function GetCommentsRequest(course_slug, challenge_id) {
  return {
    type: "@participations/GET_COMMENTS_REQUEST",
    payload: { course_slug, challenge_id },
  };
}

export function GetCommentRequestSuccess(dataComment) {
  return {
    type: "@participations/GET_COMMENTS_SUCCESS",
    payload: { dataComment },
  };
}

export function CommentRequest(course_slug, challenge_id, bodyComment) {
  return {
    type: "@participations/COMMENTS_REQUEST",
    payload: { course_slug, challenge_id, bodyComment },
  };
}

export function CommentRequestSuccess(commentUser, dataComment) {
  return {
    type: "@participations/COMMENTS_REQUEST_SUCCESS",
    payload: { commentUser, dataComment },
  };
}

export function CommentChildrenRequest(
  participation_id,
  bodyComment,
  course_slug,
  challenge_id
) {
  return {
    type: "@participations/CHILDREN_COMMENT_REQUEST",
    payload: { participation_id, bodyComment, course_slug, challenge_id },
  };
}

export function CommentChildrenSuccess(commentChildren) {
  return {
    type: "@participations/CHILDREN_COMMENT_SUCCESS",
    payload: { commentChildren },
  };
}

export function ProgressCourseRequest(course_slug, challenge_id) {
  return {
    type: "@participation/PROGRESS_COURSE_REQUEST",
    payload: { course_slug, challenge_id },
  };
}

export function ProgressCourseSuccess(dataParticipation) {
  return {
    type: "@participation/PROGRESS_COURSE_SUCCESS",
    payload: { dataParticipation },
  };
}
