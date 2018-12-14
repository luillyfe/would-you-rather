export const GET_AUTHED_USER = "GET_AUTHED_USER";

export const getAuthedUser = authedUser => ({
  type: GET_AUTHED_USER,
  authedUser
});
