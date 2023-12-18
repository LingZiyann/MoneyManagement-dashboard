import classes from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const MySidebar = () => {
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
    const openSidebar = () => {
        if (sideBarOpen === false) {setSideBarOpen(true)}
        else {setSideBarOpen(false)}
        
    };


    return (
        <div className={classes.dummysidebar} onMouseEnter={openSidebar} onMouseLeave={openSidebar}>
                {/*{ sideBarOpen ? (<FontAwesomeIcon className={classes.closeIcon} icon={faXmark}  color="#040d1c" cursor="pointer" onClick={openSidebar}/>) :
                (<FontAwesomeIcon className={classes.openIcon} icon={faBars} fontSize="2rem" color="#040d1c" cursor="pointer" onClick={openSidebar}/>)}*/}
            <nav className={sideBarOpen ? classes.SidebarcontainerOpen : classes.SidebarcontainerClosed}>
                <ul className={classes.list}>
                    <NavLink to='/Home' style={{ textDecoration: 'none', whiteSpace: "nowrap"}} className={classes.navlink}><p>Home Page</p></NavLink>
                    <NavLink to='/Transactions' style={{ textDecoration: 'none', whiteSpace: "nowrap" }}><p>Transactions</p></NavLink>
                    <NavLink to='/Balance' style={{ textDecoration: 'none', whiteSpace: "nowrap" }}><p>Balance Details</p></NavLink>
                    <NavLink to='/planner' style={{ textDecoration: 'none', whiteSpace: "nowrap" }}><p>Expenses Planner</p></NavLink>
                    <NavLink to='/todos' style={{ textDecoration: 'none', whiteSpace: "nowrap" }}><p>Todo Planner</p></NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default MySidebar;