import styled from 'styled-components';
import FadeIn from './FadeIn';
import { visual, borders } from './variables';

const { shadow } = visual;
const { radius } = borders;

const Block = styled.div`
   padding: 15px;
   margin-bottom: 30px;
   border-radius: ${ radius };
   box-shadow: ${ shadow };
   background-color: #fff;
   
   ${ FadeIn }
`;

export default Block;