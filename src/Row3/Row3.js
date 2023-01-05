import MyResponsiveLine from "./Chart";
import classes from './Row3.module.css'

const Row3 = () => {
    return(
        <div className={classes.Row3Container}>
            <p>Money distribution over time</p>
            <MyResponsiveLine></MyResponsiveLine>
        </div>
    )
}


export default Row3;