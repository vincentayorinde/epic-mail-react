import React from 'react';

const MailLinkMobile = ({id, dp, date, sender, receiver, messageData, subject, onClick, classes}) => (
      <div className="view record" id={id} onClick={onClick}>
          <div className="view pic" id={id}>
              <img src={dp} alt="" />
          </div>
          <div  className="view record-inner">
            <span className="view" id={id}>{date}</span><br />
            <span className="view" id={id}> <h3><i className={classes}></i> {subject}</h3> </span>
            <h4 className="view" id={id}>{sender}</h4>
            </div>          
      </div>
)

export default MailLinkMobile;