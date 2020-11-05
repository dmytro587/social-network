import styled, { css } from 'styled-components';
import { colors } from '../../common/styles/variables';

const { accent, secondary } = colors;

export const FieldsWrapper = styled.div`
   margin-bottom: 30px;
`;

export const FieldStyles = css`
   &:not(:last-child) {
      margin-bottom: 10px;
   }

   label {
      display: block;
      font-size: 1rem;
   }

   input {
      min-width: 300px;
      padding: 10px 5px;

      font-family: 'Roboto', sans-serif;

      border: none;
      border-bottom: 2px solid ${secondary};
      border-radius: 0;

      &::placeholder {
         font-family: inherit;
         font-size: .95rem;
         color: ${secondary};
      }
      
      &:focus {
        outline-color: ${accent};
      }
   }
`;

export const ErrorText = styled.div`
   margin: -10px 0 15px;
   padding: 5px;
   
   text-align: center;
   color: #f00;
   border: 1px solid #f00;
   border-radius: 5px;
`;






