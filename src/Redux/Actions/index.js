import axios from 'axios';
import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
} from '../Constants/Index';

export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILED,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default userAction;
