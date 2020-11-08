import React from 'react';
import { Link } from 'react-router-dom';

import Menu, { MenuItem } from '../common/Menu/Menu';
import SearchForm from './SearchForm/SearchForm';
import Avatar from '../common/Avatar/Avatar';

import logo from '../../assets/images/vector.svg';
import * as S from './styles';

const Header = ({ isAuth, userLogin, photo, logout }) => (
   <S.HeaderWrapper>
      <S.HeaderInner>
         <Link to='/profile'>
            <img src={ logo } alt=""/>
         </Link>

         <SearchForm/>
         {
            isAuth ? (
               <S.OwnerBlock>
                  <S.Login>{ userLogin }</S.Login>
                  <Menu menuButton={ <Avatar photo={ photo } /> }>
                     <MenuItem onClick={ logout }>
                        Logout
                     </MenuItem>
                  </Menu>
               </S.OwnerBlock>
            ) : <Link to="/login"/>
         }
      </S.HeaderInner>
   </S.HeaderWrapper>
);

export default Header;