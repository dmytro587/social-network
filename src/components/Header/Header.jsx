import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';

import * as S from './styles';
import logo from '../../assets/images/vector.svg';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';
import Avatar from '../common/Avatar/Avatar';
import Menu, { MenuItem } from '../common/Menu/Menu';

const Header = ({ isAuth, userLogin, photo, logout }) => {

   return (
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
}

const mapStateToProps = state => ({
   isAuth: state.auth.isAuth,
   userLogin: state.auth.userLogin,
   photo: state.profile.profileData?.photos.small
});

export default connect(
   mapStateToProps,
   { logout }
)(Header);