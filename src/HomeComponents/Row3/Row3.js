import MyResponsiveLine from "./Chart";
import classes from './Row3.module.css'
import MyResponsiveBar from "../Row2/BarChart";

const Row3 = () => {
    return(
        <div className={classes.Row3Container}>
            <p>Money spent over time</p>
            <MyResponsiveBar></MyResponsiveBar>
        </div>
    )
}


export default Row3;