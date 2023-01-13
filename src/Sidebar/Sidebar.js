import classes from './Sidebar.module.css'
import { NavLink } from "react-router-dom";

const MySidebar = () => {
    return(
        <div className={classes.Sidebarcontainer}>
                <ul>
                    <NavLink to='/Home' style={{ textDecoration: 'none' }} className={classes.navlink}><div><p>Home</p></div></NavLink>
                    <NavLink to='/Transactions' style={{ textDecoration: 'none' }}><div><p>Transactions</p></div></NavLink>
                    <NavLink to='/ExpensesPlanner' style={{ textDecoration: 'none' }}><div><p>Expenses planner</p></div></NavLink>
                    <NavLink to='/Yes' style={{ textDecoration: 'none' }}><div><p>Yes</p></div></NavLink>
                </ul>
        </div>
    );
};

export default MySidebar;