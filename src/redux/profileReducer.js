import { profileAPI, ResultCodes } from '../api/api';
import { actions as appActions } from './appReducer';

const SET_PROFILE_DATA = 'profile/SET_PROFILE_DATA';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';
const SET_STATUS = 'profile/SET_STATUS';
const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';

const initialState = {
   profileData: null,
   status: null,
   posts: [
      { id: 1, text: 'some text', likesCount: 0 }
   ]
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_PROFILE_DATA :
         return { ...state, profileData: action.payload }

      case SET_PHOTO_SUCCESS :
         return {
            ...state,
            profileData: {
               ...state.profileData,
               photos: { ...action.payload }
            }
         }

      case ADD_POST :
         if (!action.payload.trim()) return state;

         const lastPostIndex = (state.posts.length - 1);
         const lastPostId = state.posts.length && state.posts[lastPostIndex].id;

         const newPost = {
            id: lastPostId + 1,
            text: action.payload,
            likesCount: 0
         }

         return { ...state, posts: [ newPost, ...state.posts ] }

      case DELETE_POST :
         return {
            ...state,
            posts: [ ...state.posts.filter(post => post.id !== action.id) ]
         }

      case SET_STATUS :
         return { ...state, status: action.payload }

      default : return state;
   }
}

export const actions = {
   setProfileData: profileData => ({ type: SET_PROFILE_DATA, payload: profileData }),
   setPhotoSuccess: photos => ({ type: SET_PHOTO_SUCCESS, payload: photos }),
   addPost: text => ({ type: ADD_POST, payload: text }),
   deletePost: id => ({ type: DELETE_POST, id }),
   setStatus: status => ({ type: SET_STATUS, payload: status })
}

export const getUserProfile = userId =>
   async dispatch => {
      try {
         const response = await profileAPI.getProfile(userId);
         dispatch(actions.setProfileData(response.data));
      } catch (e) {
         dispatch(appActions.setAppError(e.message));
      }
   }

export const getUserStatus = userId =>
   async dispatch => {
      const response = await profileAPI.getStatus(userId);
      dispatch(actions.setStatus(response.data));
   }

export const saveStatus = status =>
   async dispatch => {
      const response = await profileAPI.updateStatus(status);

      if (response.resultCode === ResultCodes.Success) {
         dispatch(actions.setStatus(status));
      }
   }

export const saveProfile = formData =>
   async (dispatch, getState) => {
      const {
         fullName = null,
         aboutMe = null,
         lookingForAJob = null,
         jobDescription: lookingForAJobDescription = null,
         socials: contacts = null
      } = formData;

      const userId = getState().auth.authorizedId;

      const response = await profileAPI.updateProfile(
      { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts }
      );

      if (response.resultCode === ResultCodes.Success) {
         dispatch(getUserProfile(userId));
      }
   }

export const savePhoto = photoFile =>
   async dispatch => {
      const response = await profileAPI.updatePhoto(photoFile);

      if (response.resultCode === ResultCodes.Success) {
         dispatch(actions.setPhotoSuccess(response.data.photos));
      }
   }

export default profileReducer;