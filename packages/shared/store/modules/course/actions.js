/*
    ALL_COURSES
*/
export function GetAllCoursesRequest(service) {
  return {
    type: "@courses/GET_ALL_COURSES_REQUEST",
    return: { service },
  };
}

export function GetAllCoursesSuccess(courses) {
  return {
    type: "@courses/GET_ALL_COURSES_SUCCESS",
    payload: { courses },
  };
}

/*
    ALL_COURSES_SUGESTED
*/
export function GetSuggestedCoursesRequest() {
  return {
    type: "@courses/GET_SUGGESTED_COURSES_REQUEST",
  };
}

export function GetSuggestedCoursesSuccess(sugestedCourses) {
  return {
    type: "@courses/GET_SUGGESTED_COURSES_SUCCESS",
    payload: { sugestedCourses },
  };
}

/*
    ALL_COURSES_PAGINATED
*/
export function GetAllCoursesPaginatedRequest(page) {
  return {
    type: "@courses/GET_ALL_COURSES_PAGINATED_REQUEST",
    payload: { page },
  };
}

export function GetAllCoursesPaginatedSuccess(coursesPaginated) {
  return {
    type: "@courses/GET_ALL_COURSES_PAGINATED_SUCCESS",
    payload: { coursesPaginated },
  };
}

/*
    ALL_PAIDCOURSES
*/
export function GetAllPaidCoursesRequest() {
  return {
    type: "@courses/GET_ALL_PAIDCOURSES_REQUEST",
  };
}

export function GetAllPaidCoursesSuccess(paidCourses) {
  return {
    type: "@courses/GET_ALL_PAIDCOURSES_SUCCESS",
    payload: { paidCourses },
  };
}

/*
    ALL_BANNERS
*/
export function GetAllBannersRequest() {
  return {
    type: "@courses/GET_ALL_BANNERS_REQUEST",
  };
}

export function GetAllBannersRequestSuccess(banners) {
  return {
    type: "@courses/@GET_ALL_BANNERS_REQUEST_SUCCESS",
    payload: { banners },
  };
}

/*
    ALL_CATEGORIES
*/
export function GetAllCategoriesRequest() {
  return {
    type: "@courses/GET_ALL_CATEGORIES_REQUEST",
  };
}

export function GetAllCategoriesRequestSuccess(categories) {
  return {
    type: "@courses/GET_ALL_CATEGORIES_REQUEST_SUCCESS",
    payload: { categories },
  };
}

/*
    ALL_SUBSCRIPTIONS_USER
*/
export function GetAllSubscriptionsRequest() {
  return {
    type: "@courses/GET_ALL_SUBSCRIPTIONS_REQUEST",
  };
}

export function GetAllSubscriptionsSuccess(subscriptions) {
  return {
    type: "@courses/GET_ALL_SUBSCRIPTIONS_SUCCESS",
    payload: { subscriptions },
  };
}

export function SubscriptionOnCourse(course_slug, unit) {
  return {
    type: "@courses/SUBSCRIPTION_ON_COURSE_REQUEST",
    payload: { course_slug, unit },
  };
}

export function SubscriptionOnCourseSuccess(dataSubscription) {
  return {
    type: "@courses/SUBSCRPTION_ON_COURSE_SUCCESS",
    payload: { dataSubscription },
  };
}

export function GetCourseById(id) {
  return {
    type: "@courses/COURSE_BY_ID_REQUEST",
    payload: { id },
  };
}

export function GetCourseByIdSuccess(dataCourse) {
  return {
    type: "@courses/COURSE_BY_ID_REQUEST_SUCCESS",
    payload: { dataCourse },
  };
}

export function GetUnitsByCourse(id) {
  return {
    type: "@courses/UNITS_BY_COURSE_REQUEST",
    payload: { id },
  };
}

export function GetUnitsByCourseSuccess(dataUnit) {
  return {
    type: "@courses/UNITS_BY_COURSE_REQUEST_SUCCESS",
    payload: { dataUnit },
  };
}

export function GetUnitDetailRequest(id, hash_id) {
  return {
    type: "@courses/UNIT_DETAIL_REQUEST",
    payload: { id, hash_id },
  };
}

export function GetUnitDetailSuccess(dataDetailUnit) {
  return {
    type: "@courses/UNIT_DETAIL_REQUEST_SUCCESS",
    payload: { dataDetailUnit },
  };
}

export function ClearAllStates(id) {
  return {
    type: "@courses/CLEAR_ALL_STATES_CLASS_SCREEN",
    payload: { id },
  };
}

export function ClearAllStatesDetailScreen() {
  return {
    type: "@courses/CLEAR_ALL_STATES_DETAIL_SCREEN",
  };
}

export function ClearAllStatesHeader() {
  return {
    type: "@courses/CLEAR_ALL_STATES_HEADER",
  };
}
