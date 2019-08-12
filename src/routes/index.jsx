import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'


const Routes = () => (
  <>
    <Router>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </Router>
    <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
  </>
);

export default Routes;
