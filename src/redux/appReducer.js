import { getAuthUserData } from './authReducer';

const INITIALIZE_SUCCESS = 'INITIALIZE_APP';

const initialState = {
   isInitialized: false
}

const appReducer = (state = initialState, action) => {

   switch (action.type) {
      case INITIALIZE_SUCCESS :
         return { ...state, isInitialized: true }

      default : return state;
   }
}

const actions = {
   initializeSuccess: () => ({ type: INITIALIZE_SUCCESS })
}

export const initializeApp = () =>
   dispatch => {
      Promise.all([
         dispatch(getAuthUserData())
      ]).then(
         () => dispatch(actions.initializeSuccess())
      );
   }

export default appReducer;