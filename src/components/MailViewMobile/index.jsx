import React from 'react';

const MailViewMobile = ({id, dp, date, sender, receiver, messageData, subject}) => (
      <div className="record">
          <div className="pic">
              <img src={dp} alt="" />
          </div>
          <div  className="record-inner">
            <span>{date}</span><br />
            <span> <h3><i className="fas fa-circle"></i> {sender}</h3> </span>
            <h4>{subject}</h4>
            <p>{messageData}</p>
            </div>          
          </div>
)

export default MailViewMobile;