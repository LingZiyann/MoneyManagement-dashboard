import classes from './Sidebar.module.css'
import { NavLink } from "react-router-dom";

const MySidebar = () => {
    return(
        <div className={classes.Sidebarcontainer}>
                <ul>
                    <NavLink to='/Home' style={{ textDecoration: 'none' }} className={classes.navlink}><div><p>Home</p></div></NavLink>
                    <NavLink to='/Transactions' style={{ textDecoration: 'none' }}><div><p>Transactions</p></div></NavLink>
                    <NavLink to='/Balance' style={{ textDecoration: 'none' }}><div><p>Balance Details</p></div></NavLink>
                    <NavLink to='/planner' style={{ textDecoration: 'none' }}><div><p>Expenses Planner</p></div></NavLink>
                </ul>
        </div>
    );
};

export default MySidebar;