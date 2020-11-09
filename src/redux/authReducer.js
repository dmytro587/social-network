import { authAPI, ResultCodes, securityAPI } from '../api/api';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
   authorizedId: null,
   userLogin: null,
   email: null,
   isAuth: false,
   captchaUrl: null,
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_AUTH_USER_DATA : {
         const {
            id: authorizedId = null,
            login: userLogin = null,
            email = null,
            isAuth = false
         } = action.userData;

         return { ...state, authorizedId, userLogin, email, isAuth }
      }

      case SET_CAPTCHA_URL : return { ...state, captchaUrl: action.url }

      default : return state;
   }
}

const actions = {
   setAuthUserData: (userData = {}) => ({ type: SET_AUTH_USER_DATA, userData }),
   setCaptchaUrl: url => ({ type: SET_CAPTCHA_URL, url })
}

const getCaptcha = () =>
   async dispatch => {
      const url = await securityAPI.getCaptcha();
      dispatch(actions.setCaptchaUrl(url));
   }

export const login = formData =>
   async dispatch => {
      const response = await authAPI.login(formData);

      if (response.resultCode === ResultCodes.Success) {
         dispatch(getAuthUserData());
      } else if (response.resultCode === ResultCodes.Captcha) {
         dispatch(getCaptcha());
      } else {
         const message = response.messages[0] || 'some error';
         return Promise.reject(message);
      }
   }

export const logout = () =>
   async dispatch => {
      const response = await authAPI.logout();

      if (response.resultCode === ResultCodes.Success) {
         dispatch(actions.setAuthUserData());
         dispatch(actions.setCaptchaUrl(null));
      }
   }

export const getAuthUserData = () =>
   async dispatch => {
      const response = await authAPI.me();

      if (response.resultCode === ResultCodes.Success) {
         dispatch(actions.setAuthUserData({ ...response.data, isAuth: true }));
      }
   }

export default authReducer;