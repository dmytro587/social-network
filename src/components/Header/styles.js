import styled from 'styled-components';
import { colors, visual } from '../common/styles/variables';

const { white } = colors;
const { shadow } = visual;

export const HeaderWrapper = styled.div`
   height: 85px;
   background-color: ${white};
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   box-shadow: ${shadow};
`;

export const HeaderInner = styled.div`
   padding: 15px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   width: 100%;
   max-width: 980px;
   margin: 0 auto;
`;

export const OwnerBlock = styled.div`
   display: flex;
   align-items: center;
`;

export const Login = styled.span`
  margin-right: 10px;
`;

