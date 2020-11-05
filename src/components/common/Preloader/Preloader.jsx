import React from 'react';
import * as S from './styles';
import Overlay from '../styles/Overlay';

const Preloader = ({ position, ...rest }) => (
   <Overlay position={ position } whiteColor>
      <S.LdsSpinner { ...rest }>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </S.LdsSpinner>
   </Overlay>
);

export default Preloader;