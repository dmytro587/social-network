import styled from 'styled-components';
import { borders } from '../../../common/styles/variables';

const { borderBottom } = borders;

export const Header = styled.div`
   padding: 10px 10px 15px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: ${borderBottom};
`;

export const Title = styled.span`
   font-size: 1.2rem;
   font-weight: 500;
`;

export const Button = styled.button`
   cursor: pointer;
`;

export const Body = styled.div`
   padding: 15px 10px 0;
`;




