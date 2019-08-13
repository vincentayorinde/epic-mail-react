import React from 'react';

const MailView = ({id, sender, receiver, title, messageBody}) => (
  <div id={id} className="mailView">
            <p><strong>{sender}</strong> to <strong>{receiver}</strong></p>
            <h1>{title}</h1>
            <p>{messageBody}</p>
            <div className="hr"></div>
            <textarea rows="5">Hi Vincent Thanks for your email </textarea>   
  </div>
)

export default MailView;