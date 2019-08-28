import React from 'react';

const Button = ({onClick, classes, type, name, children, isSubmit, ...rest}) => {
  return (
    <button onClick={onClick} type={type} {...rest}>
        { isSubmit || name }
    </button>
  );
};

export default Button;
