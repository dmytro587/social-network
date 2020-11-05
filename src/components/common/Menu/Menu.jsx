import React, { useEffect, useState } from 'react';
import * as S from './styles';

const Menu = ({ menuButton, children }) => {

   const [isOpen, setIsOpen] = useState(false);
   const [menuRef, setMenuRef] = useState(null);

   const handleClick = () => setIsOpen(!isOpen);

   const closeMenu = e => {
      if (!menuRef.contains(e.target)) {
         setIsOpen(false);
      }
   }

   useEffect(() => {
      if (isOpen) document.addEventListener('click', closeMenu);
      else document.removeEventListener('click', closeMenu);
   }, [isOpen, closeMenu]);

   return (
      <S.Wrapper ref={ elem => setMenuRef(elem) }>
         <S.ButtonWrapper onClick={ handleClick }>
            { menuButton }
         </S.ButtonWrapper>
         <S.Items open={ isOpen }>
            { children }
         </S.Items>
      </S.Wrapper>
   );
}

export const MenuItem = ({ children, ...rest }) => (
   <S.Item { ...rest }>{ children }</S.Item>
);

export default Menu;