import classes from './TransactionsDetails.module.css'
import NewFormModal from '../../Forms/ModalForm/NewFormModal';
import { Fragment, useState, useEffect } from 'react';
import NewForm from '../../Forms/AddNewForm/NewForm';


const TransactionsDetails = (props) => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [formList, setFormList] = useState([]);
    const [removeFormId, setRemoveFormId] = useState();

    const OpenModal = () => {
        setModalOpen(true);
    };
    const CloseModal = () => {
        setModalOpen(false);
    };

    const deleteForm = (e) => {
        setRemoveFormId(e.currentTarget.id);
    };

    useEffect(() => {
        deleteDataHandler();
        // getDataHandler();
    },[removeFormId])


    async function getDataHandler () {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json')
        const myData = await response.json();
        const transactionsList = [];
        for (const key in myData){
            transactionsList.push({
                id: key,
                date: myData[key].date,
                radioData: myData[key].radioData,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
            })
            
        };
        setFormList(transactionsList);
        
    };

    async function addDataHandler (data) {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions.json', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        getDataHandler();
    };


    async function deleteDataHandler (data) {
        const response = await fetch(`https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions/${removeFormId}.json`, {
            method: 'DELETE',
            body: JSON.stringify(data),
        });
        getDataHandler()
    };

    useEffect(() => {
        getDataHandler();
    },[])

    console.log('refershed')

    const FormList = formList.map((form) => {
        return (
        <NewForm
            key={form.id}
            buttonId={form.id}
            date={form.date}
            number={formList.indexOf(form) + 1}
            activityName={form.activityName}
            amountSpent={'$' + form.amountSpent}
            radioData={form.radioData}
            deleteForm={deleteForm}
        />
        );
        });

    
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
                    
                {ModalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler} radioDataNeeded={true}/>) : null}
            </div>
        </Fragment>
    );
};

export default TransactionsDetails;