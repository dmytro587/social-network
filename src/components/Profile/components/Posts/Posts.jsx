import React from 'react';
import Block from '../../../common/styles/Block';
import * as S from './styles';
import NewPostForm from './components/NewPostForm/NewPostForm';
import Post from './components/Post/Post';


const Posts = React.memo(({
   isOwner,
   photo,
   posts,
   userName,
   onPublish,
   deletePost
}) => {

   const postsList = posts.map(post => (
      <Post
         key={ post.id }
         id={ post.id }
         text={ post.text }
         photo={ photo }
         likesCount={ post.likesCount }
         userName={ userName }
         deletePost={ deletePost }
      />
   ));

   return (
      <div>
         {
            isOwner && (
               <Block>
                  <S.Header>
                     <S.Title>Create post</S.Title>
                  </S.Header>

                  <NewPostForm onPublish={ onPublish } photo={ photo } />
               </Block>
            )
         }

         { isOwner && <article>{ postsList }</article> }
      </div>
   );
});

export default Posts;