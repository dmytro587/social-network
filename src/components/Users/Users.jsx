import React from 'react';
import User from './User/User';
import Block from '../common/styles/Block';
import Pagination from './Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';

import * as S from './styles';

const Users = ({
   setCurrentPage,
   setIsFriends,
   follow,
   unfollow,
   users,
   totalUsersCount,
   pageSize,
   currentPage,
   isFetching,
   followInProgress,
   isFriends
}) => {

   const usersList = users.map(user =>  (
      <User
         key={ user.id }
         id={ user.id }
         name={ user.name }
         photo={ user.photos.small }
         isFollowed={ user.followed }
         handler={ user.followed ? unfollow : follow }
         followInProgress={ followInProgress }
      />
   ));

   if (isFetching) return (
      <S.PreloaderWrapper>
         <Preloader position={"absolute"} />
      </S.PreloaderWrapper>
   );

   return (
      <Block>
         <S.Header>
            <S.Tab
               to='/users'
               onClick={ () => setIsFriends(false) }
               isActive={ (match, location) => ['/users', '/users/all'].includes(location.pathname) }
            >
               All users
            </S.Tab>

            <S.Tab to='/users/friends'>
               All friends
               <span>{ isFriends ? totalUsersCount : null }</span>
            </S.Tab>
         </S.Header>

         <Pagination
            totalCount={ totalUsersCount }
            pageSize={ pageSize }
            currentPage={ currentPage }
            onPageClick={ setCurrentPage }
         />

         <div>
            { usersList }
         </div>
      </Block>
   );
}

export default Users;