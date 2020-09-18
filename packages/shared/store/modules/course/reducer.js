import produce from "immer";

import { service } from "@monorepo-hi-mobile/shared/services/constant";

const INITIAL_STATE = {
  courses: [],
  banners: [],
  categories: [],
  subscriptions: [],
  paidCourses: [],
  dataCourse: {},
  coursesPaginated: {},
  dataUnit: [],
  dataDetailUnit: {},
  dataSubscription: {},
  service: service,

  challenges: [],
  campaign: "",
  page: 1,
  loading: false,
  error: "",

  subscriptionOnCourse: {},
  challengesFiltered: "",
  sugestedCourses: [],

  imageCommonCarousel: "",
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@courses/GET_ALL_COURSES_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@courses/GET_ALL_COURSES_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.courses = action.payload.courses;
        draft.service = action.payload.service;
        draft.error = "";
      });

    case "@courses/GET_ALL_COURSES_FAILURE":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.courses = [];
        draft.error = action.payload.error;
      });

    case "@courses/GET_ALL_BANNERS_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });

    case "@courses/@GET_ALL_BANNERS_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.banners = action.payload.banners;
        draft.error = "";
      });

    case "@courses/@GET_ALL_BANNERS_REQUEST_FAILURE":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = action.payload.error;
        draft.banners = {};
      });

    case "@courses/GET_ALL_CATEGORIES_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });

    case "@courses/GET_ALL_CATEGORIES_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.categories = action.payload.categories;
        draft.error = "";
      });

    case "@courses/GET_ALL_CATEGORIES_REQUEST_FAILURE":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.categories = {};
        draft.error = action.payload.error;
      });

    case "@courses/GET_ALL_SUBSCRIPTIONS_SUCCESS":
      return produce(state, (draft) => {
        draft.subscriptions = action.payload.subscriptions;
        draft.imageCommonCarousel = action.payload.subscriptions.map(
          (item) => item.course.image.urls[3].url
        );
        draft.loading = false;
      });

    case "@courses/SUBSCRIPTION_ON_COURSE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.dataSubscription = {};
      });

    case "@courses/SUBSCRPTION_ON_COURSE_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.dataSubscription = action.payload.dataSubscription;
      });

    case "@courses/GET_ALL_SUBSCRIPTIONS_FAILURE":
      return produce(state, (draft) => {
        draft.error = action.payload.error;
      });

    case "@courses/GET_ALL_PAIDCOURSES_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@courses/GET_ALL_PAIDCOURSES_SUCCESS":
      return produce(state, (draft) => {
        draft.paidCourses = action.payload.paidCourses;
        draft.loading = false;
      });

    case "@courses/COURSE_BY_ID_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@courses/COURSE_BY_ID_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.dataCourse = action.payload.dataCourse;
        draft.subscriptionOnCourse = action.payload.dataCourse.subscription;
        draft.loading = false;
      });

    case "@courses/UNITS_BY_COURSE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.dataUnit = [];
      });

    case "@courses/UNITS_BY_COURSE_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.dataUnit = action.payload.dataUnit;
      });

    case "@courses/GET_ALL_COURSES_PAGINATED_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.categories = action.payload.categories;
      });

    case "@courses/GET_ALL_COURSES_PAGINATED_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.coursesPaginated = action.payload.coursesPaginated;
        draft.page = action.payload.page;
      });

    case "@courses/UNIT_DETAIL_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@courses/UNIT_DETAIL_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.dataDetailUnit = action.payload.dataDetailUnit;
        draft.challenges = action.payload.dataDetailUnit.challenges.filter(
          (item) => item.userContent === true
        );

        draft.challengesFiltered =
          action.payload.dataDetailUnit.challenges[0].id;
      });

    case "@courses/GET_SUGGESTED_COURSES_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@courses/GET_SUGGESTED_COURSES_SUCCESS":
      return produce(state, (draft) => {
        draft.sugestedCourses = action.payload.sugestedCourses;
      });

    case "@courses/CLEAR_ALL_STATES_CLASS_SCREEN":
      return produce(state, (draft) => {
        draft.dataDetailUnit = {};
        // history.push(`/courses/${draft.dataCourse.id}`);
      });

    case "@courses/CLEAR_ALL_STATES_DETAIL_SCREEN":
      return produce(state, (draft) => {
        // history.push(`/`);
        draft.dataCourse = {};
        draft.dataUnit = [];
        draft.subscriptions = [];
        draft.paidCourses = [];
      });

    case "@courses/CLEAR_ALL_STATES_HEADER":
      return produce(state, (draft) => {
        // history.push(`/courses`);
        draft.dataCourse = {};
        draft.dataUnit = [];
        draft.subscriptions = [];
        draft.paidCourses = [];
      });

    case "@auth/LOGOUT":
      return produce(state, (draft) => {
        draft.courses = [];
        draft.banners = [];
        draft.categories = [];
        draft.subscriptions = [];
        draft.paidCourses = [];
        draft.dataCourse = {};
        draft.coursesPaginated = {};
        draft.dataUnit = [];
        draft.dataDetailUnit = {};
        draft.dataSubscription = {};

        draft.challenges = [];
        draft.campaign = "";

        draft.loading = false;
        draft.error = "";

        draft.subscriptionOnCourse = {};
        draft.challengesFiltered = "";
        draft.sugestedCourses = [];
      });

    default:
      return state;
  }
}
