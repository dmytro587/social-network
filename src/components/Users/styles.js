import styled from 'styled-components';
import Block from '../common/styles/Block';
import { borders, colors } from '../common/styles/variables';
import { NavLink } from 'react-router-dom';

const { accent } = colors;
const { borderLight } = borders;

export const PreloaderWrapper = styled(Block)`
  position: relative;
  width: 100%;
  height: 85vh;
  overflow: hidden;
`;

export const Header = styled.div`
  margin: 10px 0 25px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-bottom: 2px solid ${ borderLight };
`;

export const Tab = styled(NavLink)`
  margin: 0 10px;
  position: relative;
  cursor:pointer;
  transition: color .1s ease;
  
  &:hover {
    color: ${ accent };
  }
  
  &.active {
    &::before {
       content: '';
       width: 100%;
       height: 2px;
       background-color: ${ accent };
       
       position: absolute;
       bottom: -12px;
    }
  }
  
  span {
    padding: 1px 3px;
    display: inline-block;
    margin-left: 5px;
    
    font-size: .7rem;
    vertical-align: top;
    background-color: #efefef;
    border-radius: 1px;
  }
}`;