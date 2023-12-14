import classes from "./ToDoList.module.css"
import useTodoCRUD from "../../utils/useTodoCRUD";
import { useState, useEffect, useRef } from "react";
import TodoFormModal from "../../Forms/ModalForm/TodoFormModal";


const ToDoList = () => {
    const [currDate, setCurrDate] = useState<string>("null");
    console.log(currDate);
    const {
        modalOpen,
        editModalOpen,
        removetodoId,
        updatetodoId,
        getDatabyId,
        getDataHandler,
        addDataHandler,
        updateDataHandler,
        deleteDataHandler,
        OpenModal,
        CloseModal,
        CloseEditModal,
        currentData,
        todoList} = useTodoCRUD(currDate);


    useEffect(() => {
        console.log("deletin!!")
        deleteDataHandler(removetodoId);
    },[removetodoId])

    useEffect(() => {
        console.log(currDate)
        getDataHandler(currDate);
    },[currDate])


    const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrDate(e.target.value);
    }

    return(
        <div className={classes.todoBox}>
            <header className={classes.header}>
                <h1>Todos</h1>
                <button className={classes.circleButton} onClick={OpenModal}>+</button>
                <input type="date" className={classes.datePicker} onChange={dateChangeHandler}></input>
            </header>
            <div className={classes.todoBody}>
                {todoList}
            </div>
            {modalOpen ? (<TodoFormModal CloseModal={CloseModal} submitData={addDataHandler} updateData={updateDataHandler} getData={getDataHandler} type={"create"}/>) : null}
            {editModalOpen ? (<TodoFormModal currentData={currentData} CloseEditModal={CloseEditModal} 
            submitData={addDataHandler} updateData={updateDataHandler} getData={getDataHandler} type={"update"} updatetodoId={updatetodoId}/>) : null}
        </div>
    )

}

export default ToDoList;