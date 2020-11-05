import { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
   0% {
      opacity: 0;
      visibility: hidden;
   }

   100% {
      opacity: 1;
      visibility: visible;
   }
`;

const FadeIn = css`
   animation: ${fadeIn} .3s ease;
`;

export default FadeIn;