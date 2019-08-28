import React from 'react';
import Button from '../Button';

const MailView = ({id, sender, receiver, title, messageBody, delMsg}) => (
  <div id={id} className="mailView">
            <Button
                onClick={delMsg} 
                type="submit" 
                name="Delete" 
              />
            <p><small> From </small><strong>{sender}</strong> <small> to </small> <strong>{receiver}</strong></p>
            <h1>{title}</h1>
            <p>{messageBody}</p>
  </div>
)

export default MailView;