import React from 'react';

import * as S from './styles';

import profileIcon from '../../assets/images/profile.svg';
import usersIcon from '../../assets/images/users.svg';

const Sidebar = () => {
   return (
      <S.Wrapper>
         <S.Navigation>
            <S.Item>
               <img src={ profileIcon } alt=""/>
               <S.Link to="/profile">Profile</S.Link>
            </S.Item>

            <S.Item>
               <img src={ usersIcon } alt=""/>
               <S.Link to="/users">Users</S.Link>
            </S.Item>
         </S.Navigation>
      </S.Wrapper>
   );
}

export default Sidebar;

