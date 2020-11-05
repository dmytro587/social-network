import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import 'normalize.css';
import * as S from './styles';


ReactDOM.render(
   <React.StrictMode>
      <Provider store={ store }>
         <HashRouter>
            <App/>
         </HashRouter>
      </Provider>
      <S.GlobalStyles />
   </React.StrictMode>,
   document.getElementById('root')
);
