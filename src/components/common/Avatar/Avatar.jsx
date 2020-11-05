import React from 'react';
import userAvatar from '../../../assets/images/user.svg';
import * as S from './styles';

const Avatar = ({ photo, width, height }) => (
   <S.AvatarWrapper width={ width } height={ height } >
      <img src={ photo || userAvatar } alt=""/>
   </S.AvatarWrapper>
);

export default Avatar;