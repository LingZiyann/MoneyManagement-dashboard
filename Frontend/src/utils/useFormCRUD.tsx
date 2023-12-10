import { useState } from "react";
import { FormData } from "../types/types";
import NewForm from '../Forms/AddNewForm/NewForm';

type FormCrud = {
    modalOpen: boolean;
    removeFormId: string;
    getDataHandler: () => Promise<void>;
    addDataHandler: (data: FormData) => Promise<void>;
    deleteDataHandler: (id: string) => Promise<void>;
    OpenModal: () => void;
    CloseModal: () => void;
    FormList: (JSX.Element | null)[] | null
}

const useFormCRUD = (category: string): FormCrud => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [removeFormId, setRemoveFormId] = useState<string>('');
    const [myLocalStorage, setMyLocalStorage] = useState<FormData[]>(localStorage.getItem(category) ? JSON.parse(localStorage.getItem(category)!) : null);
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

    const getDataHandler = async function () {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${uid}/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        const myData = await response.json();
        const transactionsList = [];
        for (const key in myData){
            if (myData[key].date !== null){
            transactionsList.push({
                id: myData[key]._id,
                date: myData[key].date.slice(0, 10).split('-').reverse().join('-'),
                radioData: myData[key].radioData,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
                })
            } else {
                transactionsList.push({
                id: myData[key]._id,
                date: myData[key].date,
                radioData: myData[key].radioData,
                activityName: myData[key].activityName,
                amountSpent: myData[key].amountSpent,
                })
            }
            
        };
        localStorage.setItem(category, JSON.stringify(transactionsList));
        setMyLocalStorage(JSON.parse(localStorage.getItem(category) ?? 'null'));
    };


    const addDataHandler =  async function (data:FormData) {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
        } catch (e) {
            console.log(e);
        }
        getDataHandler();
    };

    const deleteDataHandler =  async function (removeFormId: string) {
        if (removeFormId === ''){
            return
        }
        const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/${removeFormId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            //body: JSON.stringify(data),
        });
        getDataHandler()
    };

    const FormList = myLocalStorage? myLocalStorage.map((form:FormData) => {
        return (
        <NewForm
            key={form.id}
            buttonId={form.id}
            date={form.date}
            number={myLocalStorage.indexOf(form) + 1}
            activityName={form.activityName}
            amountSpent={'$' + form.amountSpent}
            radioData={form.radioData}
            deleteForm={deleteForm}
        />
        );
    }) : null ;


    return{
        modalOpen,
        removeFormId,
        getDataHandler,
        addDataHandler,
        deleteDataHandler,
        OpenModal,
        CloseModal,
        FormList,
    };

};

export default useFormCRUD;