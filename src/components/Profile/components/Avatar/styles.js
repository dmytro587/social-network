import styled from 'styled-components';
import { colors } from '../../../common/styles/variables';

const { accent } = colors

export const Overlay = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   height: 100%;

   position: absolute;
   top: 100%;
   left: 0;

   background: linear-gradient(0deg, rgba(0 ,0, 0, 0.9), rgba(0, 0, 0, 0.1));
   transition: all .2s ease;
`;

export const AvatarWrapper = styled.div`
   width: 100px;
   height: 100px;

   background-color: #000;
   border-radius: 50%;
   overflow: hidden;
   position: relative;

   img { 
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   &:hover ${Overlay} { top: 0; }
`;



export const Label = styled.label`
   margin: auto 0 40px;
   color: #fff;
   font-size: .9rem;
   transition: color .2s ease;

   &:hover {
      color: ${accent};
   }

   input { display: none; }
`;
