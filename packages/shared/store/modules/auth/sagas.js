import { all, takeLatest, put, call, select } from "redux-saga/effects";
import { apiHiv1, apiUatHiv2, apiUatHiv1 } from "../../../services/api";
import * as GeneralActions from "../general/actions";

import {
  LoginSuccess,
  RegisterUserRequestSuccess,
  ResetPasswordSuccess,
  RenewTokenSuccess,
} from "./actions";

export function* login({ payload }) {
  const { username, password } = payload;

  try {
    yield put(GeneralActions.SetLoading({ loading: true }));
    const response = yield call(apiHiv1.post, "/auth/login/", {
      //service: constant.service,
      username,
      password,
    });

    const { user, token } = response.data;

    yield put(LoginSuccess(user, token));
    yield put(GeneralActions.SetLoading({ loading: false }));
    history.push("/");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.detail) {
      yield put(
        GeneralActions.SetError({ detail: error.response.data.detail })
      );
      yield put(GeneralActions.SetLoading({ loading: false }));
    }
  }
}

export function* register({ payload }) {
  try {
    yield put(GeneralActions.SetLoading({ loading: true }));

    const { name, email, password } = payload;

    const response = yield call(apiHiv1.post, `/auth/registration/`, {
      //service: constant.service,
      name,
      email,
      password,
    });

    const { token } = response.data;

    yield put(RegisterUserRequestSuccess(response.data, token));
    history.push("/success");
    yield put(GeneralActions.SetLoading({ loading: false }));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.detail) {
      yield put(
        GeneralActions.SetError({ detail: error.response.data.detail })
      );
      yield put(GeneralActions.SetLoading({ loading: false }));
    }
  }
}

export function* resetPassword({ payload }) {
  const { username } = payload;

  try {
    yield put(GeneralActions.SetLoading({ loading: true }));
    yield call(apiHiv1.post, "/auth/reset/", {
      //service: constant.service,
      account: username,
    });

    yield put(ResetPasswordSuccess());
    history.push("/reset-password-success");
    yield put(GeneralActions.SetLoading({ loading: false }));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.detail) {
      yield put(
        GeneralActions.SetError({ detail: error.response.data.detail })
      );
      yield put(GeneralActions.SetLoading({ loading: false }));
    }
  }
}

export function* renewToken() {
  const { token } = yield select((state) => state.auth);

  try {
    const response = yield call(
      apiHiv1.post,
      "/auth/renew/",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    yield put(RenewTokenSuccess(response.data));
  } catch (error) {
    console.log(error.response);
  }
}

// eslint-disable-next-line require-yield
export function* logout() {
  localStorage.removeItem("casadosaber");
  history.push("/login");
}

export default all([
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/LOGOUT", logout),
  takeLatest("@auth/REGISTER_REQUEST", register),
  takeLatest("@auth/RESET_PASSWORD_REQUEST", resetPassword),
  takeLatest("@auth/RENEW_TOKEN", renewToken),
]);
