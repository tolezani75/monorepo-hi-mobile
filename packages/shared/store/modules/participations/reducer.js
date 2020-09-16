import produce from "immer";

const INITIAL_STATE = {
  dataComment: [],
  loading: false,
  commentUser: {},
  commentChildren: {},
  dataParticipation: {},
};

export default function participations(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@participations/GET_COMMENTS_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@participations/GET_COMMENTS_SUCCESS":
      return produce(state, (draft) => {
        draft.dataComment = action.payload.dataComment;
        draft.loading = false;
      });

    case "@participations/COMMENTS_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@participations/COMMENTS_REQUEST_SUCCESS":
      return produce(state, (draft) => {
        draft.commentUser = action.payload.commentUser;
      });

    case "@participations/CHILDREN_COMMENT_SUCCESS":
      return produce(state, (draft) => {
        draft.commentChildren = action.payload.commentChildren;
      });

    case "@participation/PROGRESS_COURSE_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@participation/PROGRESS_COURSE_SUCCESS":
      return produce(state, (draft) => {
        draft.loading = false;
        draft.dataParticipation = action.payload.dataParticipation;
      });

    case "@auth/LOGOUT":
      return produce(state, (draft) => {
        draft.dataParticipation = {};
        draft.dataComment = [];
        draft.commentUser = {};
        draft.commentChildren = {};
      });

    default:
      return state;
  }
}
