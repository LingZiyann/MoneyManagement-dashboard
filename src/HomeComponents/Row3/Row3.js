
import classes from './Row3.module.css'
import MyResponsiveBar from "./BarChart";

const Row3 = (props) => {
    return(
        <div className={classes.Row3Container}>
            <p>Transactions distribution by month</p>
            <MyResponsiveBar fontSize={props.fontSize}></MyResponsiveBar>
        </div>
    )
}


export default Row3;