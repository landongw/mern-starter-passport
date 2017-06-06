import callApi from '../../util/apiCaller';

// Export Constants
export const SIGNED_UP = 'SIGNED_UP';

// Export Actions
export function signedUp(user) {
  return {
    type: SIGNED_UP,
    user,
  };
}

export function signUpRequest(user) {
  return (dispatch) => {
    return callApi('auth/signup', 'post', user)
    .then(res => dispatch(signedUp(res.user)));
  };
}
