import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReduser from './Redux/Reduser/index';

const rootReducer = combineReducers({ userList: userReduser });

const intialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
