import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../common/Avatar/Avatar';
import * as S from './styles';

const User = ({
   id,
   name,
   photo,
   status,
   isFollowed,
   handler,
   followInProgress
}) => {

   const isDisabled = followInProgress.some(item => item === id);

   return (
      <S.Wrapper>
         <Link to={`/profile/${id}`}>
            <Avatar photo={ photo } />
         </Link>
         <div>
            <S.Name>{ name }</S.Name>
            <S.Status>{ status }</S.Status>
         </div>

         <S.Button onClick={ () => handler(id) } disabled={ isDisabled }>
            { isFollowed ? 'Unfollow' : 'Follow' }
         </S.Button>
      </S.Wrapper>
   );
}

export default User;

