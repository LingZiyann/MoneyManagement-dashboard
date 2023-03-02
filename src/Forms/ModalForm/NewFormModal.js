import classes from './NewFormModal.module.css';
import { useEffect, useRef, useState } from 'react';

const NewFormModal = (props) => {
        const [radioDataInput, setRadioDataInput] = useState();
        const [isNumber, setIsNumber] = useState(false);
        const [radioDataEntered, setRadioDataEntered] = useState(false);
        const [formTouched, setFormTouched] = useState(false);
        const [radioDataMandatory, setRadioDataMandatory] = useState();
        const activityInputRef = useRef();
        const amountInputRef = useRef();
        const dateInputRef = useRef();      
        const SubmitFormHandler = (e) => {         
            e.preventDefault();   
            if (isNumber === true && formTouched === true && (radioDataEntered === true || radioDataMandatory === false)) {
                const data = {
                    activityName: activityInputRef.current.value,
                    amountSpent: amountInputRef.current.value,
                    date: dateInputRef.current.value,
                    radioData: radioDataInput,
                    };
                    props.submitData(data);
                    props.CloseModal();
                };
            };

        const isFormTouched = () => {
            setFormTouched(true);
        }

        const authenticateNumber = (e) => {
            if (isNaN(amountInputRef.current.value) === false && amountInputRef.current.value !== ''){              
                setIsNumber(true);
               
            } else if (isNaN(amountInputRef.current.value) === true || amountInputRef.current.value == ''){
                setIsNumber(false);
            }
        };

        const getRadioData = (e) => {
            const data = e.target.value;
            setRadioDataInput(data)
            if (radioDataInput !== ''){
                console.log(radioDataEntered)
                setRadioDataEntered(true);
            } else if (radioDataInput === '' && radioDataMandatory === false){
                setRadioDataEntered(true);
            }
        };

        return(
            <div onClick={props.CloseModal} className={classes.Modal} >
                <div className={classes.form} onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={SubmitFormHandler}>
                        <div>
                            <label for='activity'>Activity name</label>
                            <input className={classes.textInput} placeholder='name' type="text" id="activity" name="activity" ref={activityInputRef}></input>
                        </div>
                        <div>
                            <label for='amount'>Amount spent</label>
                            <input className={classes.textInput} type='text' id='amount' name='amount' ref={amountInputRef} onChange={authenticateNumber}></input>
                        </div>
                        <div>
                            <label for='date'>Date</label>
                            <input type='date' id='date' name='date' ref={dateInputRef}></input>
                        </div>
                        <div className={classes.radio} onChange={getRadioData}>
                            <input type="radio" id="Food" name="category" value="Food"></input>
                            <label for="Food">Food</label><br></br>
                            <input type="radio" id="Personal" name="category" value="Personal"></input>
                            <label for="Personal">Personal usage</label><br></br>
                            <input type="radio" id="Investment" name="category" value="Investment"></input>
                            <label for="Investment">Investment</label><br></br>
                            <input type="radio" id="Utilities" name="category" value="Utilities"></input>
                            <label for="Utilities">Utilities</label><br></br>

                        </div>
                        <button className={classes.btn} onClick={isFormTouched} type='submit'>Submit</button>
                        <button className={classes.btn} onClick={props.CloseModal}>Close</button>
                        {!isNumber && formTouched && <div style={{color:'red'}}>Enter a number</div>}
                        {!radioDataEntered && formTouched && radioDataMandatory && <div style={{color:'red'}}>Choose a category</div>}
                    </form>
                </div>
            </div>
        );
};

export default NewFormModal;