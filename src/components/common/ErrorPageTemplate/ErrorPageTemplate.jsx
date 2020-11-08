import React from 'react';
import * as S from './styles';

const ErrorPageTemplate = ({ title, children }) => (
  <S.Wrapper>
     <S.Title>{ title }</S.Title>
     { children }
  </S.Wrapper>
);

export default ErrorPageTemplate;