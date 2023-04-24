import classes from './Transactions.module.css'
import TransactionsDetails from '../../Components/TransactionsDetails/TransactionsDetails'

const Transactions = () => {


    return(
        <div className={classes.container}>
            <TransactionsDetails className={classes.AccountDetails}></TransactionsDetails>

        </div>
    )
}

export default Transactions;