import styled from 'styled-components';
import { Field } from 'formik';
import { colors } from '../styles/variables';

const { secondary } = colors;

export const Wrapper = styled.div`
  ${ ({ styles }) => styles || '' }
`;

export const Input = styled(Field)`
   min-width: 300px;
   margin: 5px 0 20px;
   padding: 7px 7px;
   display: block;
   font-size: .9rem;
   border: 1px solid ${ secondary };
   border-radius: 2px;
`;

export const Checkbox = styled(Field)`
   margin-right: 8px;
   width: 20px;
   height: 20px;
   border-radius: 5px;
   vertical-align: bottom;
`;

export const Textarea = styled(Field)`
   width: 100%;
   padding: 30px 15px 15px 5px;
   resize: none;
   border: none;
   
   &:focus { outline: none; }
`;

export const Label = styled.label`
  font-size: 1rem;
`;
