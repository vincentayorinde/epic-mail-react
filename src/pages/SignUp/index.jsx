import './index.scss';
import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { signUpAction, cleanSignUp } from '../../redux/actions/SignUp';
import '../../assets/css/react-toastify.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = (props) => {
  const {
    isCompleted, history, isSubmit, error
  } = props;
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      toast.error(<h4 className="text-center">password must match</h4>);
      return;
    }
    props.onSignUp(values);
  };

  useEffect(() => {
    if (isCompleted) {
      toast.success(<h4 id="toast-success" className="text-center">Registration successful</h4>);
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
          <h2>Sign Up</h2>
            <form onSubmit={submit}>
              <p>Email</p>
              <Input 
              inputType="email"
              name="email"
              id="email"
              placeholder="e.g. johndoe@examle.com"
              onChange={onChange}
              pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
              title="user@email.com" 
              required />
              <p>First Name</p>
              <Input type="text" onChange={onChange} name="firstname" id="firstname" required />
              <p>Last Name</p>
              <Input type="text" onChange={onChange} name="lastname" id="lastname" required />
              <p>Password</p>
              <Input type="password" onChange={onChange} name="password" id="password" required />
              <p>Re-Type Password</p>
              <Input type="password" onChange={onChange} name="confirmPassword" id="confirmPassword" required />
              <p>Mobile</p>
              <Input type="text" onChange={onChange} name="mobile" id="mobile" required placeholder="e.g. 08011122233" />
              <Button
                isSubmit={isSubmit} 
                type="submit" 
                name="Start" 
              />
            </form> 
            <br /><br />
            <i className="fas fa-chevron-right"></i> Already have an account? <a href="sign-in.html">Sign In</a>
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
  error: state.auth.error,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isSubmit: state.auth.isSubmit,
  isCompleted: state.auth.isCompleted
});


/* istanbul ignore next */
export const onSignUp = newUser => signUpAction(newUser);
export const cleanUp = () => cleanSignUp();

export const SignUpComponent = SignUp;

export default connect(mapStateToProps, { onSignUp, cleanUp })(SignUp);