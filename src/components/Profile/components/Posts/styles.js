import styled from 'styled-components';
import { borders } from '../../../common/styles/variables';

const { borderBottom } = borders;

export const Header = styled.div`
   padding: 10px 10px 15px;
   border-bottom: ${borderBottom};
`;

export const Title = styled.span`
   font-size: 1.2rem;
   font-weight: 500;
`;

