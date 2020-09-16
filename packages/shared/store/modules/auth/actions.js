export function LoginRequest(username, password) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: { username, password },
  };
}

export function LoginSuccess(user, token) {
  return {
    type: "@auth/LOGIN_SUCCESS",
    payload: { user, token },
  };
}

export function RegisterUserRequest(name, email, password) {
  return {
    type: "@auth/REGISTER_REQUEST",
    payload: { name, email, password },
  };
}

export function RegisterUserRequestSuccess(register, token) {
  return {
    type: "@auth/REGISTER_REQUEST_SUCCESS",
    payload: { register, token },
  };
}

export function RegisterSuccess() {
  return {
    type: "@auth/REGISTER_SUCCESS",
  };
}

export function ResetPasswordRequest(username) {
  return {
    type: "@auth/RESET_PASSWORD_REQUEST",
    payload: { username },
  };
}

export function ResetPasswordSuccess() {
  return {
    type: "@auth/RESET_PASSWORD_SUCCESS",
  };
}

export function ResetPasswordFailure() {
  return {
    type: "@auth/RESET_PASSWORD_FAILURE",
  };
}

export function SignFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function Logout() {
  return { type: "@auth/LOGOUT" };
}

export function RenewToken() {
  return { type: "@auth/RENEW_TOKEN" };
}

export function RenewTokenSuccess(token) {
  return { type: "@auth/RENEW_TOKEN_SUCCESS", payload: { token } };
}
