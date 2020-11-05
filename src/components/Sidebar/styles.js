import styled from 'styled-components';
import { borders, colors } from '../common/styles/variables';
import Block from '../common/styles/Block';
import { NavLink } from 'react-router-dom';

const { accent } = colors;
const { radius } = borders;

export const Wrapper = styled.div`
   grid-area: sidebar;
`;

export const Navigation = styled(Block)`
   padding: 15px;
   background-color: #fff;
   border-radius: ${radius};
`;

export const Link = styled(NavLink)`
  &.active { color: ${ accent }; }
`;

export const Item = styled.div`
   display: flex;
      align-items: center;
      font-size: 1.1rem;

      &:not(:last-child) { margin-bottom: 15px; }
      img { margin-right: 7px; }
      a {
         transition: color .1s ease;
         &:hover { color: ${accent}; }
      }
`;




