import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import openInNewWindow from '../../utils/openInNewWindow';
import Overlay from '../common/styles/Overlay';
import * as S from './styles';

const Login = ({ captchaUrl, errorMessage, login }) => {
   return (
      <Overlay>
         <S.LoginWrapper>
            <S.Title3>Login to your account</S.Title3>
            <S.Subtitle>
               Don't have an account?
               <S.SignUpButton onClick={ e => openInNewWindow(e, 'https://social-network.samuraijs.com/signUp') }>
                  Sign up free!
               </S.SignUpButton>
            </S.Subtitle>

            <LoginForm login={ login } captchaUrl={ captchaUrl } errorMessage={ errorMessage } />
         </S.LoginWrapper>
      </Overlay>
   );
}

export default Login;

