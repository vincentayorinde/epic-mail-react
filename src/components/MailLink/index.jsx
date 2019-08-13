import React from 'react';

const MailLink = ({id, date, sender, title, messageData, onClick}) => (
      <>
      <div onClick={onClick} id={id} className="record"><span>{date}</span><br />
        <span> <h3><i className="fas fa-circle"></i> {sender}</h3> </span>
        <h4>{title}</h4>
        <p>{messageData}</p>
      </div>
      </>
)

export default MailLink;