import { getAuthUserData } from './authReducer';

const INITIALIZE_SUCCESS = 'app/INITIALIZE_APP';
const SET_ERROR_MESSAGE = 'app/SET_ERROR_MESSAGE';

const initialState = {
   isInitialized: false,
   errorMessage: null
}

const appReducer = (state = initialState, action) => {

   switch (action.type) {
      case INITIALIZE_SUCCESS :
         return { ...state, isInitialized: true }

      case SET_ERROR_MESSAGE :
         return { ...state, errorMessage: action.errorMessage }

      default : return state;
   }
}

export const actions = {
   initializeSuccess: () => ({ type: INITIALIZE_SUCCESS }),
   setAppError: errorMessage => ({ type: SET_ERROR_MESSAGE, errorMessage })
}

export const initializeApp = () =>
   async dispatch => {
      Promise.all([
         dispatch(getAuthUserData())
      ]).then(() => dispatch(actions.initializeSuccess()))
   }

export default appReducer;

