import classes from './Account.module.css'
import AccountDetails from '../../AccountComponents/AccountDetails/AccountDetails';

const Transactions = () => {

    async function fetchDataHandler () {
            const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json');
            const data = await response.json();
            const organisedData = data.results.map((inputData) => {
                return{
                    id: inputData.id
                }
            })

    }

    return(
        <div className={classes.container}>
            <AccountDetails className={classes.AccountDetails}></AccountDetails>
        </div>
    )
}

export default Transactions;