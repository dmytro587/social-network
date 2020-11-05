import React from 'react';
import { Formik } from 'formik';
import * as S from './styles';

import search from '../../../assets/images/search.svg';

const SearchForm = () => {
   return (
      <Formik
         initialValues={ { search: '' } }
         onSubmit={ () => {} }
      >
      { ({ handleSubmit }) => (
        <S.Form onSubmit={ handleSubmit }>
           <S.Field placeholder="Search..." type="text" name="search" />
            <S.Button>
               <img src={ search } alt=""/>
            </S.Button>
        </S.Form>
      ) }
      </Formik>
   );
}

export default SearchForm;