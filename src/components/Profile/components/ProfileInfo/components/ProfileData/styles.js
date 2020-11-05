import styled from 'styled-components';
import FadeIn from '../../../../../common/styles/FadeIn';

export const Wrapper = styled.div`${FadeIn}`;

export const Item = styled.p`
   &:not(:last-child) {
      margin-bottom: 7px;
   }

   span { font-weight: 500; }
`;


