import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = ({inboxCount}) => (
  <ul>
    <NavLink className="nav active" to="/inbox">Inbox &nbsp;&nbsp;&nbsp; <span className="notification">{inboxCount}</span></NavLink> 
    <NavLink className="nav" to="/sent">Sent &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
    <NavLink className="nav" to="/draft">Draft &nbsp;&nbsp;&nbsp; <span className="notification">2</span></NavLink> 
    <NavLink className="nav" to="/group">Groups &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
    <NavLink className="nav" to="/trash">Trash &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
    <NavLink className="nav" to="/signin">Sign Out &nbsp;&nbsp;&nbsp; <span className="notification"></span></NavLink> 
</ul>
)

export default LeftNav;