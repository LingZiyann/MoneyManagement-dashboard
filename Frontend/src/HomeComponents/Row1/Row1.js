import classes from './Row1.module.css'
import { useState, useEffect, useRef } from 'react';

const Row1 = () => {
    const [totalAmountSpent,setTotalAmountSpent] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    const [totalMoneyNeeded, setTotalMoneyNeeded] = useState(0);
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('userId');

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

    useEffect(() => {
        getDataHandler();
    }, [])



    return(
            <div className={classes.container}>
                <div className={classes.balance}>
                    <p>Account Balance</p>
                    <span>{'$' + totalBalance}</span>
                </div>
                <div className={classes.expenditure}>
                    <p>Money Spent:</p>
                    <span>{'$' + totalAmountSpent}</span>
                </div>
                <div className={classes.needed}>
                    <p>Money Needed:</p>
                    <span>{'$' + totalMoneyNeeded}</span>
                </div>
            </div>
    );
};

export default Row1;
