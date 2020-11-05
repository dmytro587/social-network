import React from 'react';
import { ErrorMessage } from 'formik';
import * as S from './styles';

const Checkbox = ({ label, name, ...rest }) => (
   <div>
      <S.Checkbox {...rest} id={ name } type="checkbox" name={name}/>
      <S.Label htmlFor={ name }>{ label }</S.Label>
      <ErrorMessage name={ name } />
   </div>
);

export default Checkbox;

/*{/!*<Field name={name} { ...rest } >*!/}
{/!*   { ({field}) => (*!/}
{/!*      <input id={ name } type="checkbox" {...field} {...rest}/>*!/}
{/!*   )}*!/}
{/!*</Field>*!/}*/

