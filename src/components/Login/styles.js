import styled from 'styled-components';
import Block from '../common/styles/Block';
import { colors } from '../common/styles/variables';

const { mainBlack, accent } = colors;

export const LoginWrapper = styled(Block)`
   padding: 50px 15px;
   min-width: 500px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   
   font-family: 'Roboto', sans-serif;

   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

export const Title3 = styled.h3`
   margin-bottom: 10px;
   font-size: 1.5rem;
   color: ${mainBlack};
`;

export const SignUpButton = styled.button`
  cursor:pointer;
`;

export const Subtitle = styled.span`
   display: inline-block;
   margin-bottom: 100px;
   font-size: 1rem;
   color: ${mainBlack};

   button {
      padding-left: 5px;
      color: ${accent};
      text-decoration: underline;
   }
`;



