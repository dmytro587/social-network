import styled from 'styled-components';
import { borders, colors } from '../../common/styles/variables';

const { radiusSmall } = borders;
const { accent } = colors;

export const Button = styled.button`
   position: absolute;
   left: 7px;
   top: 50%;
   transform: translateY(-50%);
   cursor: pointer;
   
   img {
      display: block;
   }
`;

export const Form = styled.form`
   position: relative;
`;

export const Field = styled.input`
   min-width: 260px;
   height: 35px;
   padding: 5px 10px 5px 35px;

   color: #fff;
   background-color: ${accent};
   border-radius: ${radiusSmall};

   &::placeholder {
      color: #fff;
   }
`;


