import classes from './Expenses.module.css'
import NewFormModal from '../Forms/ModalForm/NewFormModal';
import { Fragment, useState, useEffect } from 'react';
import NewForm from '../Forms/AddNewForm/NewForm';

const Expenses = (props) => {
    const [ModalOpen, setModalOpen] = useState(false)
    const [formList, setFormList] = useState([])
    const OpenModal = () => {
        setModalOpen(true);
    }
    const CloseModal = () => {
        setModalOpen(false);
    }
    async function addDataHandler (data) {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/planner.json', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        const newData = await response.json();
        console.log(newData);
    }

    async function getDataHandler () {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/planner.json')
        const myData = await response.json();
        const plannerList = [];
        for (const key in myData){
            plannerList.push({
                id: key,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
            })
        }
        setFormList(plannerList);
        
    }

    useEffect(() => {
        getDataHandler();
    },[])

    const FormList = formList.map((form) => (
        <NewForm
            number={formList.indexOf(form) + 1}
            activityName={form.activityName}
            amountSpent={'$' + form.amountSpent}
        />
    ))


    return(
        <Fragment>
            <div className={classes.container}>
                <button onClick={OpenModal}>Add new data</button>
                <p>Filter</p>
                <table>
                    <tr className={classes.Header}>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Edit</th>   
                        <th>Delete</th>
                    </tr>
                    {FormList}
                </table>
                {ModalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler}/>) : null}
            </div>
        </Fragment>
    );
};

export default Expenses;