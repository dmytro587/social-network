import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions, follow, getUsers, unfollow } from '../redux/usersReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import BaseUsers from '../components/Users/Users';

const Users = ({
   getUsers,
   setCurrentPage,
   setIsFriends,
   follow, unfollow,
   users, totalUsersCount,
   pageSize, currentPage,
   isFetching,
   followInProgress,
   isFriends,
   location
}) => {

   useEffect(() => {
      if (location.pathname === '/users/friends') {
         setIsFriends(true);
         getUsers(pageSize, currentPage, true);
      } else {
         getUsers(pageSize, currentPage);
      }

      return () => isFriends && setIsFriends(false);
   }, [ setIsFriends, getUsers, pageSize, currentPage, isFriends, location]);

   return (
      <BaseUsers
         setCurrentPage={ setCurrentPage }
         setIsFriends={ setIsFriends }
         follow={ follow }
         unfollow={ unfollow }
         users={ users }
         totalUsersCount={ totalUsersCount }
         isFetching={ isFetching }
         followInProgress={ followInProgress }
         currentPage={ currentPage }
         pageSize={ pageSize }
         isFriends={ isFriends }
      />
   );
}

export default compose(
   withRouter,
   connect(
   ({ users }) => ({
      users: users.usersList,
      totalUsersCount: users.totalUsersCount,
      pageSize: users.pageSize,
      currentPage: users.currentPage,
      isFetching: users.isFetching,
      followInProgress: users.followInProgress,
      isFriends: users.isFriends
   }),
   {
      getUsers,
      follow,
      unfollow,
      setCurrentPage: actions.setCurrentPage,
      setIsFriends: actions.setIsFriends
   }
))(Users);