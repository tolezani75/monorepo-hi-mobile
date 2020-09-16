export function SetLoading({ loading }) {
  return {
    type: "@general/SET_LOADING",
    payload: { loading },
  };
}

export function SetError({ detail }) {
  return {
    type: "@general/SET_ERROR",
    payload: { detail },
  };
}
