import React from 'react';
import { ErrorMessage } from 'formik';
import * as S from './styles';

const Input = ({ label, name, styles, ...rest }) => (
   <S.Wrapper styles={ styles }>
      <label htmlFor={ name }>{ label }</label>
      <S.Input id={ name } name={ name } { ...rest } />
      <ErrorMessage name={ name }/>
   </S.Wrapper>
);

export default Input;