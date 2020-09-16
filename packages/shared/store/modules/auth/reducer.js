import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  token: null,
  logged: false,
  error: "",
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/LOGOUT":
      return produce(state, (draft) => {
        draft.token = null;
        draft.register = {};
        draft.error = "";
        draft.loading = false;
        draft.logged = false;
      });

    case "@auth/LOGIN_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.logged = false;
        draft.error = "";
      });

    case "@auth/LOGIN_SUCCESS":
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.logged = true;
        draft.error = "";
      });

    case "@auth/LOGIN_FAILURE":
      return produce(state, (draft) => {
        draft.error = action.payload.error;
        draft.token = "";
        draft.loading = false;
        draft.logged = false;
      });

    case "@auth/REGISTER_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.logged = false;
        draft.error = "";
      });

    case "@auth/REGISTER_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.error = "";
        draft.loading = false;
      });

    case "@auth/RESET_PASSWORD_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
        draft.logged = false;
        draft.error = "";
      });

    case "@auth/RESET_PASSWORD_SUCCESS":
      return produce(state, (draft) => {
        draft.token = null;
        draft.logged = false;
        draft.loading = false;
        draft.error = "";
      });

    case "@auth/REGISTER_SUCCESS":
      return produce(state, (draft) => {
        draft.logged = true;
        draft.loading = true;
      });

    case "@auth/RENEW_TOKEN_SUCCESS":
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.logged = true;
        draft.error = "";
      });

    default:
      return state;
  }
}
