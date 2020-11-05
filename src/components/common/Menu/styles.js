import styled, { css } from 'styled-components';
import { borders, colors } from '../styles/variables';

const { white, accent } = colors;
const { borderBottom } = borders;

export const Wrapper = styled.div`
  position: relative;
  z-index: 1100;  
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const Items = styled.div`
  display: inline-block;
  opacity: 0;
  visibility: hidden;
  transition: all .2s ease;
  
  position: absolute;
  top: 120%;
  right 0;
  
  background-color: ${ white };
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  ${ ({ open }) => open
   ? css`
      opacity: 1; 
      visibility: visible;`
   : '' }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 35%;
    
    border: 10px solid #fff;
    border-top: none;
    border-left-color: transparent;
    border-right-color: transparent;
    filter: drop-shadow(0 -5px 5px rgba(0, 0, 0, .1));
  }
`;

export const Item = styled.div`
  padding: 7px 15px;
  font-size: .9rem;
  cursor: pointer;
  
  &:not(:last-child) {
    border-bottom: ${ borderBottom };
  }
  
  &:hover {
    color: ${ accent };
    text-decoration: none;
  }
`;