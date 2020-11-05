import React from 'react';
import { Formik } from 'formik';
import * as S from './styles';

import FormikControl from '../../../../../common/FormikControl/FormikControl';
import Button from '../../../../../common/styles/Button';
import InlinePositioner from '../../../../../common/InlinePositioner/InlinePositioner';
import Avatar from '../../../../../common/Avatar/Avatar';

const NewPostForm = ({ photo, onPublish }) => {

   return (
      <Formik
         initialValues={{ newPost: '' }}
         onSubmit={ values => onPublish(values.newPost) }
      >
         { () => (
            <S.Form>
               <S.Body>
                  <Avatar photo={ photo }/>
                  <FormikControl
                     control='textarea'
                     name='newPost'
                     placeholder='Write something here...'
                     additionalStyles={ S.FieldAdditionalStyles }
                  />
               </S.Body>

               <InlinePositioner right>
                  <Button type="submit">Publish</Button>
               </InlinePositioner>
            </S.Form>
         ) }
      </Formik>
   );
}

export default NewPostForm;