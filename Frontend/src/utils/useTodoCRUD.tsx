import { useState } from "react";
import NewForm from "../Forms/AddNewForm/NewForm";
import classes from '../Components/TodoList/ToDoList.module.css';
import { todoType } from "../types/types";

interface TodoCRUD {
    modalOpen: boolean;
    removetodoId: string;
    getDataHandler: (date:string) => Promise<void>;
    addDataHandler: (data: todoType) => Promise<void>;
    deleteDataHandler: (id: string) => Promise<void>;
    OpenModal: () => void;
    CloseModal: () => void;
    todoList: (JSX.Element | null)[] | null
}

const useTodoCRUD = (date: string): TodoCRUD => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [removetodoId, setRemoveFormId] = useState<string>('');
    const [myLocalStorage, setMyLocalStorage] = useState<todoType[]>(localStorage.getItem(date) ? JSON.parse(localStorage.getItem(date)!) : null);
    const token: string|null = localStorage.getItem('token');
    const uid: string|null = localStorage.getItem('userId');

    const OpenModal = () => {
        setModalOpen(true);
    };
    const CloseModal = () => {
        setModalOpen(false);
    };
    const deleteForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        setRemoveFormId(e.currentTarget.id);
    };

    const getDataHandler = async function (mydate: string){
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/todo/${uid}/${mydate}`, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        const myData = await response.json();
        const todoList = [];
        for (const key in myData){
            if (myData[key].date !== null){
                todoList.push({
                id: myData[key]._id,
                date: myData[key].date.slice(0, 10).split('-').reverse().join('-'),
                content: myData[key].content
                })
            } else {
                todoList.push({
                id: myData[key]._id,
                date: myData[key].date,
                content: myData[key].content
                })
            }
        }
        localStorage.setItem(mydate, JSON.stringify(todoList));
        setMyLocalStorage(JSON.parse(localStorage.getItem(mydate) ?? 'null'));
 
    }

    const addDataHandler = async function (data: todoType) {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/todo/`, {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        getDataHandler(date);
    };

    const deleteDataHandler =  async function (removetodoId: string) {
        if (removetodoId === ''){
            return
        }
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/todo/${removetodoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            //body: JSON.stringify(data),
        });
        const updatedTodos = myLocalStorage.filter(todo => todo.id !== removetodoId);
        setMyLocalStorage(updatedTodos);
    
        if (updatedTodos.length === 0) {
            localStorage.removeItem(date);
        } else {
            localStorage.setItem(date, JSON.stringify(updatedTodos));
        }
    };

    const todoList = myLocalStorage? myLocalStorage.map((todo: todoType) => {
        return (
            <div className={classes.box} key={todo.id}>
                <button type="button" id={todo.id} onClick={deleteForm} className={classes.circleButton} style={{minWidth: "20px", height:"20px", backgroundColor:"white", border:"2px solid black"}}></button>
                <span>{todo.content}</span>
                <span>{todo.date}</span>
            </div>
        )
    }) : null ;

    return{
        modalOpen,
        removetodoId,
        getDataHandler,
        addDataHandler,
        deleteDataHandler,
        OpenModal,
        CloseModal,
        todoList,
    };
}

export default useTodoCRUD;
