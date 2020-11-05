import React from 'react';
import { Formik } from 'formik';
import FormikControl from './../../../../../common/FormikControl/FormikControl';
import InlinePositioner from '../../../../../common/InlinePositioner/InlinePositioner';
import Button from '../../../../../common/styles/Button';

import * as S from './styles';


const ProfileDataForm = ({
    onSubmitForm,
    socials,
    startedValues: { fullName, aboutMe, lookingForAJob, jobDescription }
}) => {

   Object.keys(socials).forEach(item => {
      if (!socials[item]) socials[item] = '';
   });

   const initialValues = {
      fullName: fullName || '',
      aboutMe: aboutMe || '',
      lookingForAJob: lookingForAJob || false,
      jobDescription: jobDescription || '',
      socials: { ...socials }
   }

   return (
      <Formik
         initialValues={ initialValues }
         onSubmit={ values => onSubmitForm(values) }
      >
         { ({ isSubmitting }) => (
            <S.FadeInForm>
               <FormikControl
                  control="input"
                  label="Full name: "
                  type="text"
                  name="fullName"
               />
               <FormikControl
                  control="input"
                  label="About me: "
                  type="text"
                  name="aboutMe"
               />
               <FormikControl
                  control="checkbox"
                  label="Looking for a job: "
                  name="lookingForAJob"
               />
               <br/>
               <FormikControl
                  control="input"
                  label="Job description: "
                  type="text"
                  name="jobDescription"
               />

               <S.Socials>
                  <h6>Socials:</h6>

                  <S.SocialsList>
                     {
                        Object.keys(socials).map(item => (
                           <FormikControl
                              key={ item }
                              control="input"
                              label={ `${item}: ` }
                              type="text"
                              name={ `socials.${item}` }
                              placeholder={ socials[item] }
                           />
                        ))
                     }
                  </S.SocialsList>
               </S.Socials>

               <InlinePositioner right>
                  <Button disabled={ isSubmitting }>Save</Button>
               </InlinePositioner>
            </S.FadeInForm>
         ) }
      </Formik>
   );
}

export default ProfileDataForm;