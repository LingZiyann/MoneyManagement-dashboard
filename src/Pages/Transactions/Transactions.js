import classes from './Transactions.module.css'
import AccountDetails from '../../AccountComponents/TransactionsDetails/TransactionsDetails';

const Transactions = () => {


    return(
        <div className={classes.container}>
            <AccountDetails className={classes.AccountDetails}></AccountDetails>
        </div>
    )
}

export default Transactions;