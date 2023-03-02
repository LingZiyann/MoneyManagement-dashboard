import classes from './Row1.module.css'
import { useState, useEffect } from 'react';

const Row1 = () => {
    const [totalAmountSpent,setTotalAmountSpent] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    const [totalMoneyNeeded, setTotalMoneyNeeded] = useState(0);

    async function getDataHandler () {
        const response1 = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json')
        const response2 = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/balance.json')
        const response3 = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/planner.json')
        const myData1 = await response1.json();
        const myData2 = await response2.json();
        const myData3 = await response3.json();
        for (const key in myData1){
            setTotalAmountSpent(prev => parseInt(prev) + parseInt(myData1[key].amountSpent))
        };
        for (const key in myData2){
            setTotalBalance(prev => parseInt(prev) + parseInt(myData2[key].amountSpent))
        };
        for (const key in myData3){
            setTotalMoneyNeeded(prev => parseInt(prev) + parseInt(myData3[key].amountSpent))
        };
    };

    useEffect(() => {getDataHandler();}, [])


    return(
            <div className={classes.container}>
                <div className={classes.balance}>
                    <p>Account Balance</p>
                    <span>{'$' + totalBalance/2}</span>
                </div>
                <div className={classes.expenditure}>
                    <p>Money Spent:</p>
                    <span>{'$' + totalAmountSpent/2}</span>
                </div>
                <div className={classes.needed}>
                    <p>Money Needed:</p>
                    <span>{'$' + totalMoneyNeeded/2}</span>
                </div>
            </div>
    );
};

export default Row1;
