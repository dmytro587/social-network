import React, { Fragment, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';

import Profile from './containers/Profile';
import Users from './containers/Users';
import Header from './containers/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/Login/Login';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import * as S from './styles';

const App = ({
   initializeApp,
   isInitialized,
   isAuth
}) => {

   useEffect(() => {
      initializeApp();
   }, [initializeApp]);

   if (!isInitialized) return <Preloader />;
   if (!isAuth) return <Login/>;

   return (
      <Fragment>
         <Header/>

         <S.Container>
            <Sidebar/>
            <Switch>
               <Route exact path="/" render={ () => <Redirect to="profile" /> }/>
               <Route path="/profile/:userId?" render={ () => <Profile/> }/>
               <Route path="/users" render={ () => <Users/> }/>
               <Route path="/login" render={ () => <Login/> }/>
               <Route path="*" render={ () => <NotFoundPage/> }/>
            </Switch>
         </S.Container>
      </Fragment>
   );
}


export default connect(
   ({ app, auth }) => ({
      isInitialized: app.isInitialized,
      isAuth: auth.isAuth
   }),
   { initializeApp }
)(App);

// = = = Profile = =
// В PostForm текстарее стилизовать скролл
// Сделать автоматически расширяющиеся инпуты
// Пофиксить переход на соц. сети (убрать в путь от сайта)


// For avatar: box-shadow: 0 3pt 8px 0.25pc rgba(0,0,0,.04);

