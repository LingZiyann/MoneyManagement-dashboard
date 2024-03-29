import classes from './TransactionsDetails.module.css'
import NewFormModal from '../../Forms/ModalForm/NewFormModal';
import { Fragment, useState, useEffect } from 'react';
import NewForm from '../../Forms/AddNewForm/NewForm';
import { getAuthToken } from '../../utils/auth';

const TransactionsDetails = (props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [removeFormId, setRemoveFormId] = useState('');
    const [myLocalStorage, setMyLocalStorage] = useState(JSON.parse(localStorage.getItem('transactions')))
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('userId')

    const OpenModal = () => {
        setModalOpen(true);
    };
    const CloseModal = () => {
        setModalOpen(false);
    };
    const deleteForm = (e) => {
        setRemoveFormId(e.currentTarget.id);
    };
    
    async function getDataHandler () {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${uid}/transactions`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        const myData = await response.json();
        const transactionsList = [];
        for (const key in myData){
            if (myData[key].date){
            transactionsList.push({
                id: myData[key]._id,
                date: myData[key].date.slice(0, 10).split('-').reverse().join('-'),
                radioData: myData[key].radioData,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
                })
            } else {
                transactionsList.push({
                id: myData[key]._id,
                date: myData[key].date,
                radioData: myData[key].radioData,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
                })
            }    
        };
        localStorage.setItem('transactions', JSON.stringify(transactionsList))
        setMyLocalStorage(JSON.parse(localStorage.getItem('transactions')))
    };

    

    async function addDataHandler (data) {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
        } catch (e) {
            console.log(e);
        }
        getDataHandler();
    };

    async function deleteDataHandler (data) {
        if (removeFormId === ''){
            return
        }
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${removeFormId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        getDataHandler()
    };

    useEffect(() => {
        getDataHandler();
    },[])

    useEffect(() => {
        deleteDataHandler();
    },[removeFormId])

    const FormList = myLocalStorage? myLocalStorage.map((form) => {
        return (
        <NewForm
            key={form.id}
            buttonId={form.id}
            date={form.date}
            number={myLocalStorage.indexOf(form) + 1}
            activityName={form.activityName}
            amountSpent={'$' + form.amountSpent}
            radioData={form.radioData}
            deleteForm={deleteForm}
        />
        );
    }) : null ;

    
    return(
        <Fragment>
            <div className={classes.container}>
                <button onClick={OpenModal}>Add new data</button>
                {/* <p>Filter</p> */}
                <table>
                    <tbody>
                        <tr className={classes.Header}>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>   
                            <th>Delete</th>
                        </tr>
                    </tbody>
                    {FormList}   
                </table>    
                    
                {ModalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler} radioDataNeeded={true} category={"transactions"}/>) : null}
            </div>
        </Fragment>
    );
};

export default TransactionsDetails;