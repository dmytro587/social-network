import styled from 'styled-components';
import { borders, colors } from '../../../common/styles/variables';

const { secondary } = colors;
const { radiusSmall } = borders;

export const Input = styled.input`
  padding: 5px;
  
  border-radius: ${radiusSmall};
  border: 1px solid ${secondary};
`;