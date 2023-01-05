import classes from './MoneyDistribution.module.css'

const MoneyDistribution = () => {
    return(
            <div className={classes.container}>
                <div className={classes.balance}>
                    <p>Account Balance:</p>
                    <span>$12,000</span>
                </div>
                <div className={classes.expenditure}>
                    <p>Money Spent:</p>
                    <span>$1000</span>
                </div>
                <div className={classes.needed}>
                    <p>Money Needed:</p>
                    <span>$1200</span>
                </div>
            </div>
    );
};

export default MoneyDistribution;