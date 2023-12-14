import classes from './NewFormModal.module.css';
import { useRef, useState } from 'react';
import React from 'react';
import { todoType } from '../../types/types';

type todoModalProps = {
    CloseModal?: () => void;
    CloseEditModal?: () => void;
    submitData: (data: any) => Promise<void>;
    updateData: (data: todoType, id: string) => Promise<void>;
    getData: (date:string) => Promise<void>;
    updatetodoId?: string;
    type: "create"|"update";
    currentData?: string
}

const TodoFormModal = (props: todoModalProps) => {
        const [formTouched, setFormTouched] = useState<boolean>(false);
        const [inputValue, setInputValue] = useState<string>(props.currentData ? props.currentData : "");
        const contentInputRef = useRef<HTMLInputElement>(null);
        const dateInputRef = useRef<HTMLInputElement>(null);
        const hoursInputRef = useRef<HTMLInputElement>(null);
        const minutesInputRef = useRef<HTMLInputElement>(null);
        console.log(props.currentData)
        // if (props.type === "create"){
        //     console.log("hey")
        //     const handleDataFetch = async () => {
        //             try {
        //                 const result = await props.getDatabyId!(props.updatetodoId!);
        //                 console.log(result);
        //                 setCurrentData(result);
        //             } catch (error) {
        //                 console.log(error);
        //             }               
        //     } 
        // }
    
        const SubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {         
            e.preventDefault();   
            if (formTouched === true && inputValue !== "" &&
                dateInputRef.current !== null && dateInputRef.current.value !== null && hoursInputRef.current !== null && minutesInputRef.current !== null 
                && !isNaN(Number(hoursInputRef.current.value)) && !isNaN(Number(minutesInputRef.current.value))) {
                const data: todoType = {
                        content: inputValue,
                        date: dateInputRef.current.value,
                        hoursTaken: Number(hoursInputRef.current.value),
                        minutesTaken: Number(minutesInputRef.current.value)

                    };
                if (props.type === "create"){
                    props.submitData(data);
                    props.CloseModal!();
                } else {
                    props.updateData(data , props.updatetodoId!)
                    console.log(data.content);
                    props.CloseEditModal!();
                }
            };
        };

        const isFormTouched = () => {
            setFormTouched(true);
        }

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(event.target.value);
        };

        return(
            <div onClick={(props.type === 'create')? props.CloseModal : props.CloseEditModal} className={classes.Modal}>
                <div className={classes.form} onClick={(e) => e.stopPropagation()} >
                    <form onSubmit={SubmitFormHandler}>
                        <div>
                            <label htmlFor='content'>Activity name</label>
                            <input className={classes.textInput} type="text" id="content" name="content"
                            value={props.type === "update" ? inputValue : ""} onChange={handleInputChange}></input>
                        </div>
                        <label htmlFor='box'>Time Taken</label>
                        <div className={classes.timeInputBox} id="box">
                            <input className={classes.timeInput} type='text' id='hours' name='hours' placeholder='Hours' ref={hoursInputRef}></input>
                            <input className={classes.timeInput} type='text' id='minutes' name='minutes' placeholder='Minutes' ref={minutesInputRef}></input>
                        </div>
                        <div>
                            <label htmlFor='date'>Date</label>
                            <input type='date' id='date' name='date' ref={dateInputRef}></input>
                        </div>
                        <button className={classes.btn} onClick={isFormTouched} type='submit'>{(props.type === 'create')? "Add" : "Save"}</button>
                        <button className={classes.btn} onClick={(props.type === 'create')? props.CloseModal : props.CloseEditModal} type='button'>Close</button>
                        {inputValue === "" && formTouched && <div style={{color:'red'}}>Task is empty</div>}
                    </form>
                </div>
            </div>
        );
};

export default TodoFormModal;