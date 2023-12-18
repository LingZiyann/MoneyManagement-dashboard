import { useCallback, useMemo, useState } from "react";
import { FormData } from "../types/types";
import NewForm from '../Forms/AddNewForm/NewForm';
import { FormListItem } from "../types/types";
import { GridRowsProp } from "@mui/x-data-grid";

type FormCrud = {
    modalOpen: boolean;
    removeFormId: string;
    getDataHandler: () => Promise<void>;
    addDataHandler: (data: FormData) => Promise<void>;
    deleteDataHandler: (id: string) => Promise<void>;
    deleteForm: (id: string) => void;
    OpenModal: () => void;
    CloseModal: () => void;
    FormList: FormListItem[] & GridRowsProp
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
    const deleteForm = (id: string) => {
        setRemoveFormId(id);
    };

    const getDataHandler = useCallback( async() =>{
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
    }, [token, uid, category]);


    const addDataHandler = useCallback( async (data:FormData) => {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            setMyLocalStorage(prevData => {
                const newData = {
                    id: responseData._id,
                    date: responseData.date? responseData.date.slice(0, 10).split('-').reverse().join('-') : "",
                    activityName: responseData.activityName,
                    amountSpent: responseData.amountSpent,
                    radioData: responseData.radioData,
                    category: responseData.radioData
                };
                return [...prevData, newData];
            })
        } catch (e) {
            console.log(e);
        }
        
    }, [token, setMyLocalStorage])

    const deleteDataHandler = useCallback( async (removeFormId: string) =>{
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
        const updatedData = myLocalStorage.filter(data => data.id !== removeFormId);
        setMyLocalStorage(updatedData);
    }, [myLocalStorage, token]);

    const FormList: FormListItem[] & GridRowsProp = useMemo(() => {
        return myLocalStorage? myLocalStorage.map((form:FormData) => ({
            id: form.id,
            // buttonId: form.id,
            date: form.date,
            number: myLocalStorage.indexOf(form) + 1,
            activityName: form.activityName,
            amountSpent: '$' + form.amountSpent,
            radioData: form.radioData,
    })) : [] ;
    }, [myLocalStorage]);


    return{
        modalOpen,
        removeFormId,
        getDataHandler,
        addDataHandler,
        deleteDataHandler,
        deleteForm,
        OpenModal,
        CloseModal,
        FormList,
    };

};

export default useFormCRUD;