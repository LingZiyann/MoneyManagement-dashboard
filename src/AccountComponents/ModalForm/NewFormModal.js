import classes from './NewFormModal.module.css';
import { useRef } from 'react';

const NewFormModal = (props) => {
        const activityInputRef = useRef();
        const amountInputRef = useRef();
        const submitFormHandler = (e) => {
            e.preventDefault();
            const data = {
                activityName: activityInputRef.current.value,
                amountSpent: amountInputRef.current.value 
            };
            props.submitData(data);
            props.getData();
            props.CloseModal();
        }

        return(
            <div onClick={props.CloseModal} className={classes.Modal} >
                <div className={classes.form} onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={submitFormHandler}>
                        <div>
                            <label for='activity'>Activity name</label>
                            <input placeholder='name' type="text" id="activity" name="activity" ref={activityInputRef}></input>
                        </div>
                        <div>
                            <label for='amount'>Amount spent</label>
                            <input type='text' id='amount' name='amount' ref={amountInputRef}></input>
                        </div>
                        <button className={classes.btn} type='submit'>Submit</button>
                        <button className={classes.btn} onClick={props.CloseModal}>Close</button>
                    </form>
                </div>
            </div>
        );
};

export default NewFormModal;