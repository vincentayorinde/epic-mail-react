
import React from 'react';
import { Link } from 'react-router-dom';

const ComposeButton = ({btnValue}) => (
  <div className="box-1-inbox">
    <Link to="/compose"><button> <i className="fas fa-pen-square"></i><a href="compose.html">{btnValue}</a></button></Link>
  </div>
)

export default ComposeButton;
 