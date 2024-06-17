import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { MdAddTask } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const Sidebar = () => {

  return (

    <div className='sidebar'>
        <Link to={'/addanimal'} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
            <span><MdAddTask /></span>
            <p>Add Animal</p>
        </div>
        </Link>

        <Link to={'/listanimal'} style={{textDecoration: 'none'}}>
        <div className="sidebar-item">
            <span><FaClipboardList /></span>
            <p>Animal List</p>
        </div>
        </Link>
    </div>

  )

}

export default Sidebar;