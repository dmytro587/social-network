import React from 'react';
import Avatar from '../../../../../common/Avatar/Avatar';
import * as S from './styles';

import likeIcon from './../../../../../../assets/images/like.svg';
import deleteIcon from './../../../../../../assets/images/cancel.svg';


const Post = ({ id, photo, text, likesCount, userName, deletePost }) => {
   return (
      <S.Wrapper>
         <S.Header>
            <S.HeaderInner>
               <Avatar photo={ photo }/>
               <S.Title>{ userName }</S.Title>
            </S.HeaderInner>

            <S.DeleteIcon onClick={ () => deletePost(id) } src={ deleteIcon } alt=""/>
         </S.Header>

         <S.Body>
            { text }
         </S.Body>

         <S.Footer>
            <img src={ likeIcon } alt=""/>
            { likesCount } Likes
         </S.Footer>
      </S.Wrapper>
   );
}

export default Post;