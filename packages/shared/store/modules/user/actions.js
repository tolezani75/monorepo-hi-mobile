export function GetProfileUserRequest() {
  return {
    type: "@profile/PROFILE_REQUEST",
  };
}

export function GetProfileUserRequsestSuccess(profile) {
  return {
    type: "@profile/PROFILE_REQUEST_SUCCESS",
    payload: { profile },
  };
}

export function UpdateNameRequest({ name }) {
  return {
    type: "@profile/UPDATE_NAME_REQUEST",
    payload: { name },
  };
}

export function UpdateNameSuccess(updatedName) {
  return {
    type: "@profile/UPDATE_NAME_SUCCESS",
    payload: { updatedName },
  };
}

export function UpdatePasswordRequest(oldPassword, newPassword) {
  return {
    type: "@profile/UPDATE_PASSWORD_REQUEST",
    payload: { oldPassword, newPassword },
  };
}

export function UpdatePasswordSuccess(dataPassword) {
  return {
    type: "@profile/UPDATE_PASSWORD_SUCCESS",
    payload: { dataPassword },
  };
}

export function GetCoursesInProgress(id) {
  return {
    type: "@profile/COURSE_IN_PROGRESS_REQUEST",
    payload: { id },
  };
}

export function GetCoursesInProgressSuccess(coursesInProgress) {
  return {
    type: "@profile/COURSE_IN_PROGRESS_SUCCESS",
    payload: { coursesInProgress },
  };
}
