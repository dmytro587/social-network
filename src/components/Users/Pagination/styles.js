import styled, { css } from 'styled-components';
import Block from '../../common/styles/Block';
import { borders, colors, visual } from '../../common/styles/variables';

const { shadow } = visual;
const { accent, lightAccent } = colors;
const { borderLight } = borders;

export const Wrapper = styled(Block)`
  max-width: 320px;
  margin: 0 auto 20px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  box-shadow: ${ shadow };
  user-select: none;
`;

export const PageItem = styled.span`
  display: inline-block;
  padding: 5px 10px;
  
  border-radius: 5px;
  text-align: center;
  cursor:pointer;
  
  transition: all .1s ease;
  
  &:hover {
    background-color: ${ lightAccent };
    color: #fff;
  }
  
  ${ ({ active }) => active && css`
      background-color: ${ accent };
      color: #fff;
  ` }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  cursor:pointer;

  transition: all .1s ease;

  &:hover {
    background-color: ${ borderLight };
    color: #fff;
  }

  ${ ({ active }) => active && css`
      background-color: ${ accent };
      color: #fff;
  ` }
`;