import './index.scss';
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import noMessage from '../../assets/images/no-message.jpg';
import { loadSentAction } from '../../redux/actions/Sent';
import { getMessageAction } from '../../redux/actions/getMessage';
import '../../assets/css/react-toastify.scss';
import dp from '../../assets/images/profile-pictures/vince.png';
import ComposeButton from '../../components/ComposeButton'
import LeftNav from '../../components/LeftNav'
import MailLink from '../../components/MailLink'
import MailView from '../../components/MailView'
import MailLinkMobile from '../../components/MailLinkMobile'
import MailViewMobile from '../../components/MailViewMobile'

class Sent extends Component {
  constructor(props) {
    super(props);
    this.currentUser;
}
  state = {
    user: this.props.user,
    message: this.props.message,
    hamburgerIcon: true,
    mobileMsg: false,
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.user);
    this.currentUser = userData.userId;
    this.props.loadSent();
  }
 
  showMessage = async () => {
    const msgBox = event.target.parentElement;
    if (msgBox.classList[0] === 'view') {
      const { id } = msgBox;
      this.props.getMessage(id);
    }
  }

  deleteMessage = () => {
    const msgBox = event.target.parentElement;
    if (msgBox.classList[0] === 'mailView') {
      const { id } = msgBox;
      console.log('message id is', id);
      this.props.deleteMessage(id);
    }
}
 
  closeNav = () => {
    this.setState({
      hamburgerIcon: true
    })
  }

  openNav = () => {
    this.setState({
      hamburgerIcon: false
    })
  }

  closeMessage = () => {
    this.setState({
      mobileMsg: false
    })
  }

  readMessage = () => {
    this.setState({
      mobileMsg: true
    });
  }
  showMessageMobile = async () => {
    this.readMessage();
    const msgBox = event.target.parentElement;
    if (msgBox.classList[0] === 'view') {
      const { id } = msgBox;
      this.props.getMessage(id);
    }
  }
 

  render() {
    const { messages } = this.props;
    const { message } = this.props;
    console.log('the messages', messages);
    const allMessages = messages.data && messages.data.rows.length >= 1 ? (
      messages.data.rows.map(message => (
        message.senderid == this.currentUser && !message.senderdelete && <MailLink key={message.id} id={message.id} date={message.createon} sender={message.senderid} title={message.subject} messageData={message.message} onClick={this.showMessage} classes={message.status === 'unread'? 'fas fa-circle' : ''} />
      ))
    ) : (
      <p><img src={noMessage} height="430px" width="400px" alt="No message yet" /></p>
    );
    const allMessagesMobile = messages.data && messages.data.rows.length >= 1 ? (
      messages.data.rows.map(message => (
        message.senderid == this.currentUser && !message.senderdelete && <MailLinkMobile dp={dp} key={message.id} id={message.id}  date={message.createon} sender={message.senderid} subject={message.subject} onClick={this.showMessageMobile} classes={message.status === 'unread'? 'fas fa-circle' : ''} />
      ))
    ) : (
      <p><img src={noMessage} height="430px" width="400px" alt="No message yet" /></p>
    );
    const specificMsg = message.data ? (
     <MailView key={message.data.id} id={message.data.id} sender={message.data.senderid} title={message.data.subject} messageBody={message.data.message} receiver={message.data.receiverid} delMsg={this.deleteMessage} />
    ) : (
      <p className="empty">No message selected yet</p>
    );
    const specificMsgMobile = message.data ? (
      <MailViewMobile key={message.data.id} id={message.data.id} sender={message.data.senderid} title={message.data.subject} messageBody={message.data.message} receiver={message.data.receiverid} classes={`box-12-inbox ${ this.state.mobileMsg ? 'readMessage' : 'closeMessage' }` } back={this.closeMessage} />
  ) : (
    ''
  );
      return (
        <Fragment>
          <div className="container-1-inbox">
            <ComposeButton btnValue='New Message'/>
            <div className="box-2-inbox">
            </div>
            <div className="box-3-inbox">
            </div>
          </div>
          <div className="container-2-inbox">
              <div className="box-4-inbox">
              <LeftNav inboxCount={allMessages.length}/>
              </div>
            <div className="box-5-inbox">
                {allMessages}
            </div>
          <div className="box-6-inbox">
            <div className="">
              <img src={dp} alt="Profile Picture" />
            </div>
            
          </div>
          <div className="box-7-inbox">
            {specificMsg}
          </div>
      </div>
      <div className="container-mobile-inbox">
        <div className="box-8-inbox">
            <span className="i2e"><i onClick={this.openNav} className="fas fa-bars"></i></span>
            <h1 >Sent</h1>
            <span><i id="searchIcon" className="fas fa-search"></i></span>
        </div>
      
        <div className="box-9-inbox">
            <span id="searchMobile"><input type="text" placeholder="Search" /></span>
            {allMessagesMobile}
            <div id="composeMobile">
                <a href="compose.html"><i id="composeNew" className="fas fa-plus-circle"></i></a>
                </div>
        </div>
          <div className={`box-10-inbox ${ this.state.hamburgerIcon ? 'closeNav' : 'openNav' }` } id="mySidenav"><br /><br />
              <a className="closebtn" onClick={this.closeNav}><i className="fas fa-times"></i></a>
              <LeftNav inboxCount={allMessages.length} />
          </div>
            {specificMsgMobile}
        </div>
        </Fragment>
      );
    };
}


const mapStateToProps = state => ({
  messages: state.sent.messages,
  message: state.getMessage.message,
});

const mapDispatchToProps = {
  loadSent: loadSentAction,
  getMessage: getMessageAction
};
export const onSentInbox = user => loadInboxAction(user);

export default connect(mapStateToProps, mapDispatchToProps)(Sent);