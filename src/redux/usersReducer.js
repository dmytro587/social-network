import { ResultCodes, usersAPI } from '../api/api';

const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'users/TOGGLE_FOLLOW_IN_PROGRESS';
const TOGGLE_FOLLOW_UNFOLLOW = 'users/TOGGLE_FOLLOW_UNFOLLOW';
const SET_IS_FRIENDS = 'users/SET_IS_FRIENDS';

const initialState = {
   usersList: [],
   pageSize: 10,
   currentPage: 1,
   totalUsersCount: 0,
   isFetching: false,
   followInProgress: [],
   isFriends: false
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USERS :
         return {
            ...state,
            usersList: [...action.users],
            totalUsersCount: action.totalUsersCount
         }

      case TOGGLE_FOLLOW_UNFOLLOW : {
         const newUsersList = state.usersList.map(item => {
            if (item.id === action.userId) item.followed = action.isFollowed;
            return item;
         });

         return { ...state, usersList: newUsersList }
      }

      case TOGGLE_FOLLOW_IN_PROGRESS : {
         let newFollowInProgress = [ ...state.followInProgress, action.userId ];
         if (!action.isFetching) {
            newFollowInProgress = state.followInProgress.filter(item => item !== action.userId)
         }

         return { ...state, followInProgress: newFollowInProgress }
      }

      case SET_CURRENT_PAGE :
         return { ...state, currentPage: +action.pageNumber }

      case SET_IS_FETCHING :
         return { ...state, isFetching: action.isFetching }

      case SET_IS_FRIENDS :
         if (action.isFriends === state.isFriends) return state;
         return { ...state, isFriends: action.isFriends, currentPage: 1 }

      default : return state;
   }
}

export const actions = {
   setUsers: (users, totalUsersCount) => ({ type: SET_USERS, users, totalUsersCount }),
   setCurrentPage: pageNumber => ({ type: SET_CURRENT_PAGE, pageNumber }),
   setIsFetching: isFetching => ({ type: SET_IS_FETCHING, isFetching }),
   toggleFollowUnfollow: (userId, isFollowed) => ({ type: TOGGLE_FOLLOW_UNFOLLOW, userId, isFollowed }),
   toggleFollowInProgress: (userId, isFetching) => ({ type: TOGGLE_FOLLOW_IN_PROGRESS, userId, isFetching }),
   setIsFriends: isFriends => ({ type: SET_IS_FRIENDS, isFriends })
}

const followUnfollowUser = async (dispatch, userId, apiMethod, isFollowed) => {
   dispatch(actions.toggleFollowInProgress(userId, true));
   const response = await apiMethod(userId);

   if (response.resultCode === ResultCodes.Success) {
      dispatch(actions.toggleFollowInProgress(userId, false));
      dispatch(actions.toggleFollowUnfollow(userId, isFollowed));
   }
}

export const getUsers = (pageSize, currentPage, isFriends) =>
   async dispatch => {
      dispatch(actions.setIsFetching(true));

      const response = await usersAPI.getUsers(pageSize, currentPage, isFriends);
      dispatch(actions.setUsers(response.items, response.totalCount));
      dispatch(actions.setIsFetching(false));
   }

export const follow = userId => dispatch =>
   followUnfollowUser(dispatch, userId, usersAPI.follow, true);

export const unfollow = userId => dispatch =>
   followUnfollowUser(dispatch, userId, usersAPI.unfollow, false);


export default usersReducer;