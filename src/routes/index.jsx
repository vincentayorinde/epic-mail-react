import React from 'react';
import { Redirect, Route, HashRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import Inbox from '../pages/Inbox'
import Compose from '../pages/Compose'
import Sent from '../pages/Sent'
import Trash from '../pages/Trash'

const SignOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return <Redirect to='/'  />
}

const Routes = () => (
  <>
    <Router>
      <Route exact path="/" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/compose" component={Compose} />
      <Route path="/sent" component={Sent} />
      <Route path="/trash" component={Trash} />
      <Route path="/sign-out" component={SignOut} />
    </Router>
    <ToastContainer autoClose={5000} position="top-center" hideProgressBar rtl={false} pauseOnHover />
  </>
);

export default Routes;
