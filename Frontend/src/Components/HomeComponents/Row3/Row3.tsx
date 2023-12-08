
import classes from './Row3.module.css'
import MyResponsiveBar from "./BarChart";

interface Row3Props {
    fontSize: number;
}
  

const Row3 = (props:Row3Props) => {
    return(
        <div className={classes.Row3Container}>
            <p>Transactions distribution by month</p>
            <MyResponsiveBar fontSize={props.fontSize}></MyResponsiveBar>
        </div>
    )
}


export default Row3;