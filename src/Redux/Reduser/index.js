export const GET_USER_REQUEST = 'GET_USER_REQUEST';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const GET_USER_FAILED = 'GET_USER_FAILED';

// import {
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   GET_USER_FAILED,
// } from '../Constants/Index';

export const userReduser = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true, users: [] };

    case GET_USER_SUCCESS:
      return { loading: false, users: action.payload };

    case GET_USER_FAILED:
      return { loading: false, users: action.payload };

    default:
      return state;
  }
};

export default userReduser;
