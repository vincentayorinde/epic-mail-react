import React from 'react';
import Button from '../Button';

const MailView = ({id, sender, receiver, title, messageBody, isSubmit}) => (
  <div id={id} className="mailView">
            <Button
                isSubmit={isSubmit} 
                type="submit" 
                name="Delete" 
              />
            <p><small> From </small><strong>{sender}</strong> <small> to </small> <strong>{receiver}</strong></p>
            <h1>{title}</h1>
            <p>{messageBody}</p>
            <div className="hr"></div>
            <textarea rows="5">Hi Vincent Thanks for your email </textarea>   
  </div>
)

export default MailView;