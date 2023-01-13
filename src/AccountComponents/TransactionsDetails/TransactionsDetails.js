import classes from './TransactionsDetails.module.css'
import NewFormModal from '../../Forms/ModalForm/NewFormModal';
import { Fragment, useState, useEffect } from 'react';
import NewForm from '../../Forms/AddNewForm/NewForm';

const AccountDetails = (props) => {
    const [ModalOpen, setModalOpen] = useState(false)
    const [formList, setFormList] = useState([])
    const OpenModal = () => {
        setModalOpen(true);
    }
    const CloseModal = () => {
        setModalOpen(false);
    }
    async function addDataHandler (data) {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const newData = await response.json();
        console.log(newData);
    }

    async function getDataHandler () {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json')
        const myData = await response.json();
        const transactionsList = [];
        for (const key in myData){
            transactionsList.push({
                id: key,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
            })
        }
        setFormList(transactionsList);
        
    }

    useEffect(() => {
        getDataHandler();
    },[])
    console.log(formList);
    const FormList = formList.map((form) => (
        <NewForm
            number={formList.indexOf(form)}
            activityName={form.activityName}
            amountSpent={form.amountSpent}
        />
    ))


    return(
        <Fragment>
            <div className={classes.container}>
                <button onClick={OpenModal}>Add</button>
                <p>Filter</p>
                <ul className={classes.Header}>
                    <p style={{flex: 1, textAlign: "center"}}>Number</p>
                    <p style={{flex: 3}}>Name</p>
                    <p style={{flex: 2, textAlign:'center'}}>Amount</p>
                    <p style={{flex: 2}}>Date</p>
                    <p style={{flex: 1}}>Edit</p>   
                    <p style={{flex: 1}}>Delete</p>
                </ul>
                <div>{FormList}</div>
                {ModalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler}/>) : null}
            </div>
        </Fragment>
    );
};

export default AccountDetails;