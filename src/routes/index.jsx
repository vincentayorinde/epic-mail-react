import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Inbox from '../pages/Inbox'


const Routes = () => (
  <>
    <Router>
      <Route exact path="/" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/inbox" component={Inbox} />
    </Router>
    <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
  </>
);

export default Routes;
