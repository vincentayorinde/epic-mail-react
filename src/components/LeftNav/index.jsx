import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => (
  <ul>
    <NavLink className="nav active" to="/inbox">Inbox &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
    <NavLink className="nav" to="/sent">Sent &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
    <NavLink className="nav" to="/trash">Trash &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
    <NavLink className="nav" to="/sign-out">Sign Out &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
</ul>
)

export default LeftNav;