import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';

import FormikControl from '../../common/FormikControl/FormikControl';
import InlinePositioner from '../../common/InlinePositioner/InlinePositioner';
import Button from '../../common/styles/Button';

import * as S from './styles';

const initialVales = {
   captcha: '',
   email: '',
   password: '',
   rememberMe: false
}

const LoginForm = ({ login, captchaUrl }) => {

   const [isMount, setIsMount] = useState(true);

   useEffect(() => {
      return () => setIsMount(false);
   }, [isMount])

   const handleSubmit = (values, { setStatus }) => {
      login(values)
         .then(() => isMount && setStatus({ error: '' }))
         .catch( err => {
            isMount && setStatus({ error: err });
         })
   }

   return (
      <Formik
         initialValues={ initialVales }
         onSubmit={ handleSubmit }
      >
         {({ status, isSubmitting }) => (
            <Form>
               <S.FieldsWrapper>
                  <FormikControl
                     control="input"
                     type="email"
                     name="email"
                     placeholder="Email address"
                     styles={S.FieldStyles}
                  />
                  <FormikControl
                     control="input"
                     type="password"
                     name="password"
                     placeholder="Password"
                     styles={S.FieldStyles}
                  />
                  <FormikControl
                     control="checkbox"
                     name="rememberMe"
                     label="Remember me"
                  />
               </S.FieldsWrapper>

               { status?.error && (
                  <S.ErrorText>{ status.error || '' }</S.ErrorText>
               ) }

               {
                  captchaUrl && (
                  <>
                     <img src={ captchaUrl } alt=""/>
                     <FormikControl
                        control="input"
                        name="captcha"
                        placeholder="Enter text"
                        styles={S.FieldStyles}
                     />
                  </>)
               }

               <InlinePositioner center>
                  <Button cursorPointer={ isSubmitting } large type="submit">Login</Button>
               </InlinePositioner>
            </Form>
         )}
      </Formik>
   );
}

export default LoginForm;

