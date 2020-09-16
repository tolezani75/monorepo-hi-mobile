import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  openUnit: false,
  detail: "",
};

export default function general(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@general/SET_LOADING":
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });

    case "@general/SET_ERROR":
      return produce(state, (draft) => {
        draft.detail = action.payload.detail;
      });

    default:
      return state;
  }
}
