import React from 'react';
import * as S from './styles';

import arrowLeft from './../../../assets/images/arrowLeft.svg';
import arrowRight from './../../../assets/images/arrowRight.svg';

const Pagination = ({ totalCount, pageSize, currentPage, onPageClick }) => {

   const portionNumbers = [];
   const PORTION_SIZE = 3;
   const pagesCount = Math.ceil(totalCount / pageSize);
   const separator = ' .... ';

   let rightLimit = currentPage + Math.floor(PORTION_SIZE / 2);
   let leftLimit = currentPage - Math.floor(PORTION_SIZE / 2);

   if (leftLimit <= 0) {
      rightLimit++;
      leftLimit = currentPage;
   }
   if (currentPage === pagesCount) {
      if (currentPage !== 1) leftLimit--;
      rightLimit = currentPage;
   }

   for (let i = leftLimit; i <= rightLimit; i++) portionNumbers.push(i);

   let paginationSetup = [];
   if (currentPage < pagesCount - 1) {
      paginationSetup =  [...portionNumbers, separator, pagesCount];
   } else {
      paginationSetup = [...portionNumbers];
   }

   const pagination = paginationSetup
      .map(item => {
         if (typeof item !== 'number') return item;
         const num = item;

         return (
            <S.PageItem
               key={ num }
               active={ num === currentPage }
               onClick={ e => onPageClick(e.target.textContent) }>
               { num }
            </S.PageItem>
         );
      });

   const onPrevButtonClick = () => {
      if (currentPage > 1) onPageClick(1);
   }

   const onNextButtonClick = () => {
      if (currentPage < pagesCount) onPageClick(pagesCount);
   }

   return (
      <S.Wrapper>
         <S.Button onClick={ onPrevButtonClick }>
            <img src={ arrowLeft } alt=""/>
         </S.Button>

         <div>
            { pagination }
         </div>

         <S.Button onClick={ onNextButtonClick }>
            <img src={ arrowRight } alt=""/>
         </S.Button>
      </S.Wrapper>
   );
}

export default Pagination;

// if (rightLimit === 0) {
//    for (let i = leftLimit; i <= currentPage; i++) portionNumbers.push(i);
// } else if (leftLimit === 0) {
//    for (let i = currentPage; i <= rightLimit; i++) portionNumbers.push(i);
// } else {
//    for (let i = leftLimit; i <= rightLimit; i++) portionNumbers.push(i);
// }
