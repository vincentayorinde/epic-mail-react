import './index.scss';
// import '../Inbox/index.scss';
import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { composeAction } from '../../redux/actions/Compose';
import '../../assets/css/react-toastify.scss';
import ComposeButton from '../../components/ComposeButton'
import LeftNav from '../../components/LeftNav';
import Button from '../../components/Button';
import Input from '../../components/Input';



const Compose = (props) => {
  const {
    isCompleted, history, isSubmit, error
  } = props;
  const [values, setValues] = useState({
    receiverId: '',
    subject: '',
    message: '',
  });
  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    /* istanbul ignore next */
    if (!values.email && !values.subject && !values.msg === true) {
      /* istanbul ignore next */
      toast.error(<h4 className="text-center">All fields are required</h4>);
      /* istanbul ignore next */
      return;
    }
    console.log('the values', values);
    props.onCompose(values);
  };
  useEffect(() => {
    if (isCompleted) {
      toast.success(<h4 id="toast-success" className="text-center">Message Sent!</h4>);
      /* istanbul ignore next */
      history && history.push('/sent');
    }
    if (error !== null) {
      console.log('the error', error);
      toast.error(<h4 className="text-center">{error.data.message}</h4>);
      // if (Array.isArray(error)) {
      //   for (let i = 0; i < error.length; i += 1) {
      //     toast.error(<h4 className="text-center">{error[i].message}</h4>);
      //   }
      // } else {
      //   toast.error(<h4 className="text-center">{error}</h4>);
      // }
    }
  
  }, [isCompleted, error]);
  return (
    <Fragment>
    <div className="container-1-compose">
      <ComposeButton btnValue='New Message'/>
      <div className="box-2-compose">
      </div>
      <div className="box-3-compose">
      </div>
    </div>
    <div className="container-2-compose">
      <div className="box-4-inbox">
      <LeftNav />
      </div>
      <div className="box-5-compose">
          <form onSubmit={submit}>
          <div>
              <Input 
              inputType="email"
              name="receiverId"
              id="email-input-lg"
              onChange={onChange}
              pattern="^[\w.]+@[\w]{2,20}.[a-z]{2,10}$"
              title="user@email.com"
              placeholder="To"
              required />
          </div>
          <div>
            <Input 
              inputType="text"
              name="subject"
              id="subject-input-lg"
              onChange={onChange}
              placeholder="Subject"
              required />
          </div>
          <div>
          <textarea rows="10" name="message" onChange={onChange} id="textarea-input-lg" required placeholder="Enter message"></textarea>
          </div>
          <Button
                isSubmit={isSubmit} 
                type="submit" 
                name="Send" 
              />
        </form>
      </div>
    </div>
  <div className="container-mobile-compose">
  <div className="box-6-compose">
         <NavLink to="/inbox"><span ><i className="fas fa-chevron-left"></i></span></NavLink>
         <h1 >Compose</h1>
      </div>
       <div className="box-7-compose">
          <form>
          <div>
             <input type="email" id="email-input-sm" required placeholder="To" />
          </div>
          <div>
              <input type="text" id="subject-input-sm" required placeholder="Subject" />
          </div>
          <div>
          <textarea rows="10" id="textarea-input-sm" placeholder="Enter message" required></textarea>
          </div>
          <button id="composeMobile">Send</button>
        </form>
      </div>
  </div>
  </Fragment>
  );
};

const mapStateToProps = state => ({
  error: state.compose.error,
  message: state.compose.message,
  isSubmit: state.compose.isSubmit,
  isCompleted: state.compose.isCompleted
});


/* istanbul ignore next */
export const onCompose = messageData => composeAction(messageData);

export const composeComponent = Compose;

export default connect(mapStateToProps, { onCompose })(Compose);