import React, { Fragment, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';

import Profile from './containers/Profile';
import Users from './containers/Users';
import Header from './containers/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Preloader from './components/common/Preloader/Preloader';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ErrorPage from './components/ErrorPage/ErrorPage';

import * as S from './styles';
import Login from './containers/Login';

const App = ({
   initializeApp,
   isInitialized,
   isAuth,
   errorMessage
}) => {

   useEffect(() => {
      initializeApp();
   }, [initializeApp]);

   if (!isInitialized) return <Preloader/>;
   if (isInitialized && !isAuth) return <Login/>;
   if (errorMessage) return <ErrorPage />;

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
      isAuth: auth.isAuth,
      errorMessage: app.errorMessage
   }),
   { initializeApp }
)(App);

