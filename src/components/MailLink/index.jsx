import React from 'react';

const MailLink = ({id, date, sender, title, messageData, onClick, classes}) => (
      <>
      <div onClick={onClick} id={id} className="view record"><span>{date}</span><br />
        <span className="view" id={id}> <h3><i className={classes}></i> {sender}</h3> </span>
        <h4 className="view" id={id}>{title}</h4>
        <p className="view" id={id}>{messageData}</p>
      </div>
      </>
)

export default MailLink;