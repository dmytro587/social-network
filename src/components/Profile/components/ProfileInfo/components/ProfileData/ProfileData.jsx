import React from 'react';
import * as S from './styles';

const ProfileData = ({
   aboutMe,
   lookingForAJob,
   jobDescription,
}) => {

   return (
      <S.Wrapper>
         <S.Item>
            <span>About me: </span>
            { aboutMe || 'Nothing specified...' }
         </S.Item>

         <S.Item>
            <span>Looking for a job: </span>
            { lookingForAJob ? 'yes' : 'no' }
         </S.Item>

         <S.Item>
            <span>Job description: </span>
            { jobDescription || 'Nothing specified...' }
         </S.Item>
      </S.Wrapper>
   );
}

export default ProfileData;

