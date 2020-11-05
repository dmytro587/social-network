import styled from 'styled-components';
import StyledButton from '../../common/styles/Button';
import { borders, colors } from '../../common/styles/variables';

const { borderBottom } = borders;
const { mainBlack } = colors;

export const Wrapper = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
   
  &:not(:last-child) {
    border-bottom: ${ borderBottom };
  }
`;

export const Button = styled(StyledButton)`
  margin-left: auto;
`;

export const Name = styled.h4`
  font-weight: 500;
  color: ${ mainBlack };
`;

export const Status = styled.span`

`;



