import React from 'react';

const Input = ({ name, inputType, classes, inputClass, ...rest }) => (
      <input type={inputType} required name={name} classes={inputClass} {...rest} />
  );
export default Input;
