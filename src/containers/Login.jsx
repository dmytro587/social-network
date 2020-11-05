import React from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/authReducer';

import BaseLogin from './../components/Login/Login';

const Login = ({ captchaUrl, errorMessage, login }) => (
   <BaseLogin
      login={ login }
      captchaUrl={ captchaUrl }
      errorMessage={ errorMessage }
   />
);

export default connect(
   ({ auth }) => ({
      captchaUrl: auth.captchaUrl,
      errorMessage: auth.error
   }),
   { login })
(Login);

