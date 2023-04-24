import BalanceDetails from '../../Components/BalanceComponents/BalanceDetails'
import classes from './Balance.module.css'

const Balance = () => {
    return(
        <div className={classes.container}>
            <BalanceDetails></BalanceDetails>
        </div>
    );
}

export default Balance;