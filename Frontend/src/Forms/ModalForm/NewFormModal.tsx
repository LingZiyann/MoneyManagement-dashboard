import classes from './NewFormModal.module.css';
import { useRef, useState } from 'react';
import React from 'react';
import { FormData } from '../../types/types';

type FormModalProps = {
    CloseModal: () => void;
    submitData: (data: any) => Promise<void>;
    getData: () => Promise<void>;
    radioDataNeeded: boolean;
    category: string;
}

const NewFormModal = (props: FormModalProps) => {
        const [radioDataInput, setRadioDataInput] = useState<string>('');
        const [isNumber, setIsNumber] = useState<boolean>(false);
        const [radioDataEntered, setRadioDataEntered] = useState<boolean>(false);
        const [formTouched, setFormTouched] = useState<boolean>(false);
        const [radioDataMandatory, setRadioDataMandatory] = useState<boolean>(props.radioDataNeeded);
        const activityInputRef = useRef<HTMLInputElement>(null);
        const amountInputRef = useRef<HTMLInputElement>(null);
        const dateInputRef = useRef<HTMLInputElement>(null);      
        const SubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {         
            e.preventDefault();   
            if (isNumber === true && formTouched === true && (radioDataEntered === true || radioDataMandatory === false)) {
                const data: FormData = {
                    activityName: activityInputRef.current?.value ?? "",
                    amountSpent: parseFloat(amountInputRef.current!.value),
                    date: dateInputRef.current?.value ?? "",
                    radioData: radioDataInput,
                    category: props.category
                    };
                    props.submitData(data);
                    props.CloseModal();
                };
            };

        const isFormTouched = () => {
            setFormTouched(true);
        }

        const authenticateNumber = () => {
            const parsedValue = parseFloat(amountInputRef.current?.value ?? '');
            if (isNaN(parsedValue) === false){              
                setIsNumber(true);
            } else {
                setIsNumber(false);
            }
        }

        const getRadioData = (e: React.ChangeEvent<HTMLInputElement>) => {
            const data = e.target.value;
            setRadioDataInput(data)
            if (data !== ''){
                setRadioDataEntered(true);
            } else if (data === '' && radioDataMandatory === false){
                setRadioDataEntered(true);
            }
        };

        return(
            <div onClick={props.CloseModal} className={classes.Modal} >
                <div className={classes.form} onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={SubmitFormHandler}>
                        <div>
                            <label htmlFor='activity'>Activity name</label>
                            <input className={classes.textInput} type="text" id="activity" name="activity" ref={activityInputRef}></input>
                        </div>
                        <div>
                            <label htmlFor='amount'>Amount spent</label>
                            <input className={classes.textInput} type='text' id='amount' name='amount' ref={amountInputRef} onChange={authenticateNumber}></input>
                        </div>
                        <div>
                            <label htmlFor='date'>Date</label>
                            <input type='date' id='date' name='date' ref={dateInputRef}></input>
                        </div>
                        <div className={classes.radio} onChange={getRadioData}>
                            <input type="radio" id="Food" name="category" value="Food"></input>
                            <label htmlFor="Food">Food</label><br></br>
                            <input type="radio" id="Personal" name="category" value="Personal"></input>
                            <label htmlFor="Personal">Personal usage</label><br></br>
                            <input type="radio" id="Investment" name="category" value="Investment"></input>
                            <label htmlFor="Investment">Investment</label><br></br>
                            <input type="radio" id="Utilities" name="category" value="Utilities"></input>
                            <label htmlFor="Utilities">Utilities</label><br></br>

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