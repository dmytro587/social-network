import React from 'react';
import * as S from './styles';
import defaultPhoto from './../../../../assets/images/user.svg';

const Avatar = ({ isOwner, photo, savePhoto }) => {

   const onChangePhoto = e => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   return (
      <>
         <S.AvatarWrapper>
            <img src={ photo || defaultPhoto } alt=""/>
            {
               isOwner && (
                  <S.Overlay>
                     <S.Label>
                        Change photo
                        <input onChange={ onChangePhoto } type="file"/>
                     </S.Label>
                  </S.Overlay>
               )
            }
         </S.AvatarWrapper>
      </>
   );
}

export default Avatar;