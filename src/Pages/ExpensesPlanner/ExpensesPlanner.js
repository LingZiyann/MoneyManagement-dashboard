import classes from './ExpensesPlanner.module.css'
import { Fragment } from 'react';
import NewFormModal from '../../Forms/ModalForm/NewFormModal';

const ExpensesPlanner = () => {
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
}

export default ExpensesPlanner;