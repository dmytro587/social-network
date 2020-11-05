import styled from 'styled-components';
import { colors } from '../styles/variables';

const { accent } = colors;

export const LdsSpinner = styled.div`
   display: inline-block;
   width: 100px;
   height: 100px;
   
   color: #000;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
      
   & div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
   }
   & div:after {
      content: " ";
      display: block;
      position: absolute;
      margin: -4px;
      top: ${ ({ small }) => small ? '25px' : '3px'};
      left: ${ ({ small }) => small ? '43px' : '37px'};
      width: ${ ({ small }) => small ? '3px' : '6px'};
      height: ${ ({ small }) => small ? '11px' : '18px'};
      border-radius: 20%;
      background: ${accent}; // preloader color
   }
   & div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
   }
   & div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
   }
   & div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
   }
   & div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
   }
   & div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
   }
   & div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
   }
   & div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
   }
   & div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
   }
   & div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
   }
   & div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
   }
   & div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
   }
   & div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
   }
   
   @keyframes lds-spinner {
      0% {
         opacity: 1;
      }
      100% {
         opacity: 0;
      }
   }
`;
