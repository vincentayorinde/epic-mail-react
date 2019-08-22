import './index.scss';
import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signInAction, cleanSignIn } from '../../redux/actions/SignIn';
import '../../assets/css/react-toastify.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';


const SignIn = (props) => {
  const {
    isCompleted, history, isSubmit, error
  } = props;
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    /* istanbul ignore next */
    if (!values.email && !values.password === true) {
      /* istanbul ignore next */
      toast.error(<h4 className="text-center">All fields are required</h4>);
      /* istanbul ignore next */
      return;
    }
    props.onSignIn(values);
  };

  useEffect(() => {
    if (isCompleted) {
      toast.success(<h4 id="toast-success" className="text-center">Login successful</h4>);
      /* istanbul ignore next */
      history && history.push('/inbox');
    }
    if (error) {
      if (Array.isArray(error)) {
        for (let i = 0; i < error.length; i += 1) {
          toast.error(<h4 className="text-center">{error[i].message}</h4>);
        }
      } else {
        toast.error(<h4 className="text-center">{error}</h4>);
      }
    }
    /* istanbul ignore next */
    return () => {
      /* istanbul ignore next */
      props.cleanUp();
    };
  }, [isCompleted, error]);
  return (
    <Fragment>
    <div className="container-1">
    <div className="box-1">
      <div className="content">
          <p>Experience</p>
          <p>the new way to</p>
          <p> send messages</p>
          <p>Use EPIC Mail <em>today!</em></p>
          <div className="links">
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">APIs</a></li>
              </ul>
            </div>
      </div>
      
    </div>
    <div className="box-2">
      <div className="signup">
        <p>Welcome to EPIC Mail</p>
          <h2>Sign In</h2>
            <form onSubmit={submit}>
              <p>Email</p>
              <Input 
              inputType="email"
              name="email"
              id="email"
              onChange={onChange}
              pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
              title="user@email.com" 
              required />
              <p>Password</p>
              <Input type="password" onChange={onChange} name="password" id="password" required />
              <Button
                isSubmit={isSubmit} 
                type="submit" 
                name="Sign In" 
              />
            </form> 
            <br /><br />
            <i className="fas fa-chevron-right"></i> Don't have an account? <Link to="/">Sign Up</Link>
      </div>
    </div>
    <div className="box-3">
        <div className="content">
        </div>
    </div>
    </div>
  </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.authLogin.error,
  user: state.authLogin.user,
  isAuthenticated: state.authLogin.isAuthenticated,
  isSubmit: state.authLogin.isSubmit,
  isCompleted: state.authLogin.isCompleted
});

/* istanbul ignore next */
export const onSignIn = user => signInAction(user);
export const cleanUp = () => cleanSignIn();

export const SignInComponent = SignIn;

export default connect(mapStateToProps, { onSignIn, cleanUp })(SignIn);