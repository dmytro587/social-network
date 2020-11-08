import styled from 'styled-components';
import Overlay from '../styles/Overlay';

export const Wrapper = styled(Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  font-size: 1.5rem;
  background-color: #fff;
`;

export const Title = styled.h1`
  margin-top: -50px;
  margin-bottom: 10px;
  font-size: 5rem;
`;