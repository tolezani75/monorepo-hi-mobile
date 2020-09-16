import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  profile: {},
  image: {},
  password: "",
  error: "",
  openUnits: false,
  coursesInProgress: [],
  updatedName: "",
  premium: false,
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@profile/PROFILE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = "";
      });

    case "@profile/PROFILE_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = "";
        draft.profile = action.payload.profile;
        draft.premium = action.payload.profile.premium;
      });

    case "@profile/UPDATE_PICTURE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.image = {};
      });

    case "@profile/UPDATE_PICTURE_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.image = action.payload.image;
      });

    case "@profile/UPDATE_PASSWORD_REQUEST":
      return produce(state, (draft) => {
        draft.password = "";
        draft.loading = true;
      });

    case "@profile/UPDATE_PASSWORD_SUCCESS":
      return produce(state, (draft) => {
        draft.password = action.payload.password;
        draft.loading = false;
      });

    case "@profile/COURSE_IN_PROGRESS_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@profile/COURSE_IN_PROGRESS_SUCCESS":
      return produce(state, (draft) => {
        draft.coursesInProgress = action.payload.coursesInProgress;
        draft.openUnits = true;
      });

    case "@profile/UPDATE_NAME_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@profile/UPDATE_NAME_SUCCESS":
      return produce(state, (draft) => {
        draft.updatedName = action.payload.updatedName;
      });

    case "@auth/LOGOUT":
      return produce(state, (draft) => {
        draft.profile = {};
        draft.loading = false;
      });

    default:
      return state;
  }
}
