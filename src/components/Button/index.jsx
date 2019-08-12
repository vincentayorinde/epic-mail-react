import React from 'react';

const Button = ({onClick, classes, type, name, children, isSubmit, ...rest}) => {
  return (
    <button onClick={onClick} type={type} disabled={isSubmit} {...rest}>
        { !isSubmit ? (children || name) : 'Loading...'}
    </button>
  );
};

export default Button;
