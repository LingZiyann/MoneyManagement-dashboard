import classes from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

const MySidebar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const openSidebar = () => {
        if (sideBarOpen === false) {setSideBarOpen(true)}
        else {setSideBarOpen(false)}
        
    };


    return (
        <nav className={sideBarOpen ? classes.SidebarcontainerOpen : classes.SidebarcontainerClosed}>
                    { sideBarOpen ? (<FontAwesomeIcon className={classes.closeIcon} icon={faXmark}  color="#040d1c" cursor="pointer" onClick={openSidebar}/>) :
                    (<FontAwesomeIcon className={classes.openIcon} icon={faBars} fontSize="2rem" color="#040d1c" cursor="pointer" onClick={openSidebar}/>)}
                <ul className={classes.list}>
                    
                    { sideBarOpen ? (<NavLink to='/Home' style={{ textDecoration: 'none' }} className={classes.navlink}><div><p>Home Page</p></div></NavLink>) : null}
                    { sideBarOpen ? (<NavLink to='/Transactions' style={{ textDecoration: 'none' }}><div><p>Transactions</p></div></NavLink>) : null}
                    { sideBarOpen ? (<NavLink to='/Balance' style={{ textDecoration: 'none' }}><div><p>Balance Details</p></div></NavLink>) : null}
                    { sideBarOpen ? (<NavLink to='/planner' style={{ textDecoration: 'none' }}><div><p>Expenses Planner</p></div></NavLink>) : null}
                </ul>
        </nav>
    );
};

export default MySidebar;