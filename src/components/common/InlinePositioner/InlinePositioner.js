import React from 'react';
import * as S from './styles';


const InlinePositioner = props => (
  <S.ButtonWrapper { ...props } >
     { props.children }
  </S.ButtonWrapper>
);

export default InlinePositioner;