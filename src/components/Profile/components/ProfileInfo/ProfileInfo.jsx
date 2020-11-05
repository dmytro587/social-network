import React, { useState } from 'react';
import ProfileData from './components/ProfileData/ProfileData';
import ProfileDataForm from './components/ProfileDataForm/ProfileDataForm';

import editIcon from '../../../../assets/images/edit.svg';
import Block from '../../../common/styles/Block';
import * as S from './styles';

const ProfileInfo = ({
   saveProfile,
   isOwner,
   profileData: {
      fullName,
      aboutMe,
      contacts: socials,
      lookingForAJob,
      lookingForAJobDescription: jobDescription,
   }
}) => {

   const [editMode, setEditMode] = useState(false);

   const onSaveProfileClick = profileData => {
      saveProfile(profileData)
         .then(() => setEditMode(false))
   }

   return (
      <Block>
         <S.Header>
            <S.Title>Profile info</S.Title>
            {
               isOwner && (
                  <S.Button onClick={ () => setEditMode(!editMode) }>
                     <img src={ editIcon } alt=""/>
                  </S.Button>
               )
            }
         </S.Header>

         <S.Body>
            {
               editMode
                  ? <ProfileDataForm
                        onSubmitForm={ onSaveProfileClick }
                        startedValues={ { fullName, aboutMe, socials, lookingForAJob, jobDescription } }
                        socials={ socials }
                    />
                  : <ProfileData
                        aboutMe={ aboutMe }
                        lookingForAJob={ lookingForAJob }
                        jobDescription={ jobDescription }
                    />
            }
         </S.Body>
      </Block>
   );
}

export default ProfileInfo;