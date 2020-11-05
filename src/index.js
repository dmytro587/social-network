import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import App from './App';
import store from './redux/store';
import * as S from './styles';


ReactDOM.render(
   <React.StrictMode>
      <Provider store={ store }>
         <BrowserRouter>
            <App/>
         </BrowserRouter>
      </Provider>
      <S.GlobalStyles />
   </React.StrictMode>,
   document.getElementById('root')
);
