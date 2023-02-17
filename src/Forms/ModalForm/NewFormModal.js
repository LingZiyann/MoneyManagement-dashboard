import classes from './NewFormModal.module.css';
import { useRef, useState } from 'react';

const NewFormModal = (props) => {
        const activityInputRef = useRef();
        const amountInputRef = useRef();
        const [radioDataInput, setRadioDataInput] = useState()
        const submitFormHandler = (e) => {
            e.preventDefault();
            const data = {
                activityName: activityInputRef.current.value,
                amountSpent: amountInputRef.current.value,
                radioData: radioDataInput,
            };
            props.submitData(data);
            props.getData();
            props.CloseModal();
        }



        const getRadioData = (e) => {
            const data = e.target.value;
            setRadioDataInput(data)
        }

        return(
            <div onClick={props.CloseModal} className={classes.Modal} >
                <div className={classes.form} onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={submitFormHandler}>
                        <div>
                            <label for='activity'>Activity name</label>
                            <input className={classes.textInput} placeholder='name' type="text" id="activity" name="activity" ref={activityInputRef}></input>
                        </div>
                        <div>
                            <label for='amount'>Amount spent</label>
                            <input className={classes.textInput} type='text' id='amount' name='amount' ref={amountInputRef}></input>
                        </div>
                        <div className={classes.radio} onChange={getRadioData}>
                            <input type="radio" id="food" name="category" value="food"></input>
                            <label for="food">Food</label><br></br>
                            <input type="radio" id="personal" name="category" value="personal"></input>
                            <label for="personal">Personal usage</label><br></br>
                            <input type="radio" id="investment" name="category" value="investment"></input>
                            <label for="investment">Investment</label><br></br>
                            <input type="radio" id="utilities" name="category" value="utilities"></input>
                            <label for="utilities">Utilities</label><br></br>

                        </div>
                        <button className={classes.btn} type='submit'>Submit</button>
                        <button className={classes.btn} onClick={props.CloseModal}>Close</button>
                    </form>
                </div>
            </div>
        );
};

export default NewFormModal;