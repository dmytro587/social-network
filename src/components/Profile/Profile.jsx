import React from 'react';

import openInNewWindow from '../../utils/openInNewWindow';
import Avatar from './components/Avatar/Avatar';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import Posts from './components/Posts/Posts';
import Status from './components/Status/Status';
import * as S from './styles';

import githubIcon from './../../assets/images/socials/github.svg';
import facebookIcon from './../../assets/images/socials/facebook.svg';
import vkontakteIcon from './../../assets/images/socials/vkontakte.svg';
import instagramIcon from './../../assets/images/socials/instagram.svg';
import twitterIcon from './../../assets/images/socials/twitter.svg';
import youtubeIcon from './../../assets/images/socials/youtube.svg';
import websiteIcon from './../../assets/images/socials/website.svg';

const socialIcons = {
   github: githubIcon,
   facebook: facebookIcon,
   instagram: instagramIcon,
   twitter: twitterIcon,
   vk: vkontakteIcon,
   youtube: youtubeIcon,
   website: websiteIcon
}

const Profile = ({
   deletePost,
   addPost,
   saveProfile,
   savePhoto,
   saveStatus,
   profileData,
   posts,
   status,
   largePhoto,
   smallPhoto,
   isOwner,
   fullName
}) => {

   const socials = profileData.contacts;

   const socialsList = Object.keys(socials).map(key => {
      if (socials[key] && key !== 'mainLink') return (
         <button key={ socials[key] } onClick={ e => openInNewWindow(e, socials[key]) }>
            <img src={ socialIcons[key] } alt=""/>
         </button>
      );
      return null;
   });

   return (
      <div>
         <S.PageHeader>
            <S.Preview backgroundUrl={ largePhoto }>
               <S.AvatarWrapper>
                  <Avatar isOwner={ isOwner } savePhoto={ savePhoto } photo={ smallPhoto } />
                  <S.Name>{ fullName }</S.Name>
                  <Status saveStatus={ saveStatus } status={ status } />
               </S.AvatarWrapper>
            </S.Preview>

            <S.Socials>
               { socialsList }
            </S.Socials>
         </S.PageHeader>

         <ProfileInfo
            isOwner={ isOwner }
            profileData={ profileData }
            saveProfile={ saveProfile }
         />

         <Posts
            isOwner={ isOwner }
            posts={ posts }
            onPublish={ addPost }
            photo={ smallPhoto }
            userName={ fullName }
            deletePost={ deletePost }
         />
      </div>
   );
}

export default Profile;
