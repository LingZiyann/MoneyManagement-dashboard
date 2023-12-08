import classes from './Row1.module.css'
import { useState, useEffect } from 'react';

const Row1 = () => {
    const [myLocalTransactions, setLocalTransactions] = useState<string|null>(localStorage.getItem('transactionsValue') || "0");
    const [myLocalBalance, setLocalBalance] = useState<string|null>(localStorage.getItem('balanceValue') || "0");
    const [myLocalPlanner, setLocalPlanner] = useState<string|null>(localStorage.getItem('plannerValue') || "0");
    const token: string | null = localStorage.getItem('token');
    const uid: string | null = localStorage.getItem('userId');

    async function getDataHandler () {
        const response1 = await fetch(process.env.REACT_APP_BACKEND_URL +`/form/${uid}/transactions`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        const response2 = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${uid}/balance`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        const response3 = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${uid}/planner`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        const myData1 = await response1.json();
        const myData2 = await response2.json();
        const myData3 = await response3.json();
        let totalAmountSpent = 0
        let totalBalance = 0
        let totalMoneyNeeded = 0
        for (const key in myData1){
            totalAmountSpent += parseInt(myData1[key].amountSpent)
        };
        for (const key in myData2){
            totalBalance += parseInt(myData2[key].amountSpent)
        };
        for (const key in myData3){
            totalMoneyNeeded += parseInt(myData3[key].amountSpent)
        };
        console.log(totalAmountSpent, totalBalance, totalMoneyNeeded)
        localStorage.setItem('transactionsValue', totalAmountSpent.toString())
        setLocalTransactions(localStorage.getItem('transactionsValue'))
        localStorage.setItem('balanceValue', totalBalance.toString())
        setLocalBalance(localStorage.getItem('balanceValue'))
        localStorage.setItem('plannerValue', totalMoneyNeeded.toString())
        setLocalPlanner(localStorage.getItem('plannerValue'))
    };

    useEffect(() => {
        getDataHandler();
    }, [])



    return(
            <div className={classes.container}>
                <div className={classes.balance}>
                    <p>Account Balance</p>
                    <span>{'$' + myLocalBalance}</span>
                </div>
                <div className={classes.expenditure}>
                    <p>Money Spent:</p>
                    <span>{'$' + myLocalTransactions}</span>
                </div>
                <div className={classes.needed}>
                    <p>Money Needed:</p>
                    <span>{'$' + myLocalPlanner}</span>
                </div>
            </div>
    );
};

export default Row1;
