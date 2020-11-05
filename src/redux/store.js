import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import profileReducer from './profileReducer';
import appReducer from './appReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
   app: appReducer,
   auth: authReducer,
   profile: profileReducer,
   users: usersReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;