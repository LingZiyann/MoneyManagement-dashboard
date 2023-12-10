import classes from './NewFormModal.module.css';
import { useRef, useState } from 'react';
import React from 'react';
import { todoType } from '../../types/types';

type todoModalProps = {
    CloseModal: () => void;
    submitData: (data: any) => Promise<void>;
    getData: (date:string) => Promise<void>;
}

const TodoFormModal = (props: todoModalProps) => {
        const [formTouched, setFormTouched] = useState<boolean>(false);
        const contentInputRef = useRef<HTMLInputElement>(null);
        const dateInputRef = useRef<HTMLInputElement>(null);  
    
        const SubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {         
            e.preventDefault();   
            if (formTouched === true && contentInputRef.current !== null && contentInputRef.current.value !== null &&
                dateInputRef.current !== null && dateInputRef.current.value !== null) {
                const data: todoType = {
                        content: contentInputRef.current.value,
                        date: dateInputRef.current.value
                    };
                    props.submitData(data);
                    props.CloseModal();
                };
            };

        const isFormTouched = () => {
            setFormTouched(true);
        }

        return(
            <div onClick={props.CloseModal} className={classes.Modal} >
                <div className={classes.form} onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={SubmitFormHandler}>
                        <div>
                            <label htmlFor='content'>Activity name</label>
                            <input className={classes.textInput} type="text" id="content" name="content" ref={contentInputRef}></input>
                        </div>
                        <div>
                            <label htmlFor='date'>Date</label>
                            <input type='date' id='date' name='date' ref={dateInputRef}></input>
                        </div>
                        <button className={classes.btn} onClick={isFormTouched} type='submit'>Submit</button>
                        <button className={classes.btn} onClick={props.CloseModal} type='button'>Close</button>
                        {contentInputRef.current?.value == null && formTouched && <div style={{color:'red'}}>Task is empty</div>}
                    </form>
                </div>
            </div>
        );
};

export default TodoFormModal;