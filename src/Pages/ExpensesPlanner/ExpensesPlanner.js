import Expenses from "../../ExpensesComponents/Expenses";
import classes from './ExpensesPlanner.module.css'

const ExpensesPlanner = () => {
    return(
        <div className={classes.container}>
            <Expenses/>
        </div>
    );
}

export default ExpensesPlanner;