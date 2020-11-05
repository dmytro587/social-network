import styled from 'styled-components';
import { colors, borders } from './variables';

const { accent, white, darkenAccent } = colors;
const { radiusSmall } = borders;

const Button = styled.button`
   padding: ${({ large }) => large ? '7px 17px 9px' : '5px 10px'};

   font-size: ${({ large }) => large ? '1.2rem' : '1.1rem'};
   color: ${white};
   
   background-color: ${accent};
   border-radius: ${radiusSmall};
   border: none;
   
   transition: background-color .1s ease;
   cursor: ${({ cursorPointer }) => !cursorPointer ? 'pointer': 'default'};

   &:hover,
   &:disabled,
   &:focus {
      background-color: ${darkenAccent};
   }

   &:focus { outline: none; }
`;

export default Button;