import classes from './TransactionsDetails.module.css'
import NewFormModal from '../../Forms/ModalForm/NewFormModal';
import { Fragment, useEffect } from 'react';

import useFormCRUD from '../../utils/useFormCRUD';
// import { getAuthToken } from '../../utils/auth';


const TransactionsDetails = () => {
    const { 
        modalOpen, removeFormId,
        getDataHandler, addDataHandler, deleteDataHandler,
        OpenModal, CloseModal, FormList 
    } = useFormCRUD("transactions");

    useEffect(() => {
        getDataHandler();
    },[])

    useEffect(() => {
        deleteDataHandler(removeFormId);
    },[removeFormId])

    // const FormList = myLocalStorage? myLocalStorage.map((form) => {
    //     return (
    //     <NewForm
    //         key={form.id}
    //         buttonId={form.id}
    //         date={form.date}
    //         number={myLocalStorage.indexOf(form) + 1}
    //         activityName={form.activityName}
    //         amountSpent={'$' + form.amountSpent}
    //         radioData={form.radioData}
    //         deleteForm={deleteForm}
    //     />
    //     );
    // }) : null ;

    
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
                    
                {modalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler} radioDataNeeded={true} category={"transactions"}/>) : null}
            </div>
        </Fragment>
    );
};

export default TransactionsDetails;