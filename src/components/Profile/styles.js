import styled from 'styled-components';
import Block from '../common/styles/Block';
import userIcon from './../../assets/images/user.svg'

export const PageHeader = styled(Block)`
   padding-bottom: 130px !important;
   position: relative;
   color: inherit;
`;

export const Name = styled.p`
   margin: 10px 0;
   text-align: center;
   font-size: 1.1rem;
`;

export const AvatarWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   
   position: absolute;
   left: 50%;
   top: 110%;
   transform: translate(-50%, -50%);
   z-index: 1000;
`;

export const Preview = styled.div`
   min-height: 200px;
   position: relative;
   
   &::before, 
   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      
      width: 100%;
      height: 100%;
   }
   
   &::before {
      background: 
         url(${ ({ backgroundUrl }) => backgroundUrl || userIcon }) 
         center/cover no-repeat;
      filter: blur(4px);
   } 
   
   &::after {
      box-shadow: 0 0 0 10px #fff;
   }     
`;

export const Socials = styled.div`
   position: absolute;
   bottom: 20px;
   left: 10px;
   
   display: flex;
   
   button {
      margin: 0 5px;
      display: inline-block;
      width: 25px;
      height: 25px;
      transition: transform .15s ease;
      
      &:hover {
        transform: scale(.9);
      }
   
      img {
         display: block;
         width: 100%;
         height: 100%;
         object-fit: cover;
         cursor:pointer;
      }
   }
`;