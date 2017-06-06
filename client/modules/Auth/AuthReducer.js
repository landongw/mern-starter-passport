import { SIGNED_UP } from './AuthActions';

// Initial State
const initialState = { user: null };

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_UP :
      return {
        user: action.user,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getUser = state => state.user;


// Export Reducer
export default AuthReducer;
