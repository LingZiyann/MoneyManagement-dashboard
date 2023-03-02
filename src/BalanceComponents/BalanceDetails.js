import classes from './BalanceDetails.module.css'
import NewFormModal from '../Forms/ModalForm/NewFormModal';
import { Fragment, useState, useEffect } from 'react';
import NewForm from '../Forms/AddNewForm/NewForm';


const BalanceDetails = (props) => {
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
    },[removeFormId])


    async function getDataHandler () {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/balance.json')
        const myData = await response.json();
        const balanceList = [];
        for (const key in myData){
            balanceList.push({
                id: key,
                date: myData[key].date,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
            })
        }
        setFormList(balanceList);
    };

    async function addDataHandler (data) {
        const response = await fetch('https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/balance.json', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        getDataHandler();

    };

    async function deleteDataHandler (data) {
        const response = await fetch(`https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/balance/${removeFormId}.json`, {
            method: 'DELETE',
            body: JSON.stringify(data),
        });
        getDataHandler();
    };

    useEffect(() => {
        getDataHandler();
    },[])

    const FormList = formList.map((form) => (
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
    ));


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
                
                {ModalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler} radioDataNeeded={false}/>) : null}
            </div>
        </Fragment>
    );
};

export default BalanceDetails;