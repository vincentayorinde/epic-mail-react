import React from 'react';

const MailViewMobile = ({id, sender, receiver, title, messageBody, classes, back}) => (
    <div className={classes} id="readMessage">
      <div className="box-11-inbox">
      <i onClick={back} className="fas fa-chevron-left"></i>
      <i className="fas fa-trash-alt"></i>
      <i className="fas fa-reply"></i>
      <i className="fas fa-reply-all"></i>
      <i className="fas fa-forward"></i>
    </div>
      <div className="body-inbox">
      <h1>{title}</h1><br />
      <small>
        From: <strong> {sender}</strong> <br />
        To: <strong> {receiver}</strong>
      </small>
      <br />
      <br />
      {messageBody}
      </div>
    </div>
)

export default MailViewMobile;