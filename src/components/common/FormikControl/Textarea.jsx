import React from 'react';
import { ErrorMessage } from 'formik';
import * as S from './styles';

const Textarea = ({ label = '', name, additionalStyles, ...rest }) => (
   <S.Wrapper styles={ additionalStyles }>
      <label htmlFor={ name }>{ label }</label>
      <S.Textarea component='textarea' id={ name } name={ name } { ...rest } />
      <ErrorMessage name={ name } />
   </S.Wrapper>
);

export default Textarea;