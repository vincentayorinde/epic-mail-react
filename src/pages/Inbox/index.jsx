import './index.scss';
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { loadInboxAction } from '../../redux/actions/Inbox';
import '../../assets/css/react-toastify.scss';
import dp from '../../assets/images/profile-pictures/vince.png';
import ComposeButton from '../../components/ComposeButton'
import LeftNav from '../../components/LeftNav'
import MailLink from '../../components/MailLink'
import MailView from '../../components/MailView'
import MailViewMobile from '../../components/MailViewMobile'

class Inbox extends Component {
  state = {
    user: this.props.user,
    hamburgerIcon: true,
  };

  componentDidMount() {
    this.props.loadInbox();
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

  render() {
    const { messages } = this.props;
    const allMessages = messages.data && messages.data.rows.length >= 1 ? (
      messages.data.rows.map(message => (
        <MailLink onClick={this.showMsg} key={message.id} id={message.id}  date={message.createon} sender={message.senderid} title={message.subject} messageData={message.message} />
      ))
    ) : (
      <p className="empty">No Inbox messages yet</p>
    );
    const allMessagesMobile = messages.data && messages.data.rows.length >= 1 ? (
      messages.data.rows.map(message => (
        <MailViewMobile dp={dp} onClick={this.showMsg} key={message.id} id={message.id}  date={message.createon} sender={message.senderid} title={message.subject} messageData={message.message} />
      ))
    ) : (
      <p className="empty">No Inbox message</p>
    );

      return (
        <Fragment>
          <div className="container-1-inbox">
            <ComposeButton btnValue='New Message'/>
            <div className="box-2-inbox">
              {/* <p><span>Sort by</span> Date <i className="fas fa-sort-down"></i></p> */}
            </div>
            <div className="box-3-inbox">
              {/* <i className="fas fa-trash-alt"></i>
              <i className="fas fa-reply"></i>
              <i className="fas fa-reply-all"></i>
              <i className="fas fa-forward"></i> */}
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
            {/* <MailView /> */}
            {/* <div className="reply-icons">
                <i className="fas fa-font"></i>
                <i className="fas fa-paperclip"></i>
                <i className="fas fa-link"></i>
            </div>
            <button>Send</button> */}
          </div>
      </div>
      <div className="container-mobile-inbox">
        <div className="box-8-inbox">
            <span className="i2e"><i onClick={this.openNav} className="fas fa-bars"></i></span>
            <h1 >Inbox</h1>
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
              <LeftNav />
          </div>
          
            <div className="box-12-inbox" id="readMessage">
                <div className="box-11">
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-trash-alt"></i>
                    <i className="fas fa-reply"></i>
                    <i className="fas fa-reply-all"></i>
                    <i className="fas fa-forward"></i>
                    
                    
                  </div>
                <div className="body-inbox">
                  <h1>Designing of Estate Project</h1><br />
                  <p>From<strong> Vincent Ayorinde</strong> to <strong>Larry Peters</strong></p>
                  <br />
                  <p>Hi Larry</p>
                  <p>I love your UI design work and would love your to talk to you about possibly revamping the UI on our desktop application. Can we jump on Zoom and discus when you have the time </p>
                  <p>I am looking for a UI designer for an upcoming Estate app. We already have an established web presence and we are now moving to mobile space.</p>
                </div>
            </div>
        </div>
        </Fragment>
      );
    };
}


const mapStateToProps = state => ({
  messages: state.inbox.messages,
});

const mapDispatchToProps = {
  loadInbox: loadInboxAction,
};
export const onLoadInbox = user => loadInboxAction(user);

export const InboxComponent = Inbox;

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);