import classes from './Sidebar.module.css'

const MySidebar = () => {
    return(
        <div className={classes.Sidebarcontainer}>
            <ul>
                <div><p>Dashboard</p></div>
                <div><p>Transactions</p></div>
                <div><p>Savings</p></div>
                <div><p>Of course</p></div>
            </ul>
        </div>
    );
};

export default MySidebar;