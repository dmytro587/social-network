import styled from 'styled-components';
import { borders, colors } from '../../../../../common/styles/variables';
import Block from '../../../../../common/styles/Block';

const { borderBottom } = borders;
const { secondary, mainBlack } = colors;

export const Wrapper = styled(Block)`
  &:not(:last-child) {
    border-bottom: ${ borderBottom };
  }
`;

export const Header = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  
  border-bottom: ${ borderBottom };
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  padding: 15px 0;
  border-bottom: ${ borderBottom };
  color: ${ mainBlack };
`;

export const DeleteIcon = styled.img`
  display: block;
  width: 15px;
  height: 15px;
  opacity: .5;
  cursor:pointer;
`;

export const Footer = styled.div`
  padding: 15px 0 5px;
  display: flex;
  align-items: center;
  
  color: ${ secondary };
  
  img {
    margin-right: 5px;
    display: block;
    cursor:pointer;
  }
`;

export const Title = styled.span`
  color: ${ mainBlack };
`;