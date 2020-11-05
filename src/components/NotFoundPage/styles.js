import styled from 'styled-components';
import Overlay from '../common/styles/Overlay';

export const Wrapper = styled(Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  font-size: 1.5rem;
  background-color: #fff;
  
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1100;
`;

export const Title = styled.h1`
  margin-top: -50px;
  margin-bottom: 10px;
  font-size: 5rem;
`;