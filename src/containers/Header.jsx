import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/authReducer';

import BaseHeader from './../components/Header/Header';

const Header = ({ isAuth, userLogin, photo, logout }) => (
  <BaseHeader
     isAuth={ isAuth }
     userLogin={userLogin}
     photo={photo}
     logout={logout}
  />
);

export default connect(
   ({ auth, profile }) => ({
      isAuth: auth.isAuth,
      userLogin:auth.userLogin,
      photo: profile.profileData?.photos.small
   }),
   { logout }
)(Header);