import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { compose } from 'redux';
import BaseProfile from '../components/Profile/Profile';
import {
   actions,
   getUserProfile,
   getUserStatus,
   savePhoto,
   saveProfile,
   saveStatus
} from '../redux/profileReducer';
import Preloader from '../components/common/Preloader/Preloader';


const Profile = ({
  getUserProfile,
  getUserStatus,
  deletePost,
  addPost,
  saveProfile,
  savePhoto,
  saveStatus,
  authorizedId,
  posts,
  status,
  match,
  profileData
}) => {

   const [isOwner, setIsOwner] = useState(false);
   const userId = match.params.userId;

   useEffect(() => {
      if (!userId) setIsOwner(true);
      const id = userId || authorizedId;

      getUserProfile(id);
      getUserStatus(id);
   }, [userId, authorizedId, getUserStatus, getUserProfile]);


   if (!profileData) return <Preloader/>;

   const {
      fullName,
      photos: {
         small: smallPhoto,
         large: largePhoto
      },
   } = profileData;

   return (
      <BaseProfile
         savePhoto={ savePhoto }
         saveStatus={ saveStatus }
         status={ status }
         profileData={ profileData }
         saveProfile={ saveProfile }
         isOwner={ isOwner }
         largePhoto={ largePhoto }
         smallPhoto={ smallPhoto }
         posts={ posts }
         addPost={ addPost }
         fullName={ fullName }
         deletePost={ deletePost }
      />
   );
}

export default compose(
   withRouter,
   connect(
      ({ auth, profile }) => ({
         authorizedId: auth.authorizedId,
         profileData: profile.profileData,
         posts: profile.posts,
         status: profile.status
      }),
      {
         getUserProfile,
         getUserStatus,
         saveStatus,
         saveProfile,
         savePhoto,
         addPost: actions.addPost,
         deletePost: actions.deletePost
      }
   )
)(Profile);
