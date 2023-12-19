import { useCallback, useMemo, useState } from "react";
import { FormData, ResponseData } from "../types/types";
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
        const myData = await response.json() as ResponseData[];
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
        setMyLocalStorage(prevData => {
            const newData = {
                id: "",
                date: data.date? data.date.slice(0, 10).split('-').reverse().join('-') : "",
                activityName: data.activityName,
                amountSpent: data.amountSpent,
                radioData: data.radioData,
                category: data.radioData
            };
            return [...prevData, newData];
            })
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/form/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json() as ResponseData;
            setMyLocalStorage(prevData => {
                const lastIndex = prevData.length - 1;
                console.log(prevData);
                const lastItem = prevData[lastIndex];
                const updatedLastItem = {...lastItem, id: responseData._id}
                return [...prevData.slice(0, prevData.length - 1), updatedLastItem]
            })

        } catch (e) {
            console.log(e);
        }
        
    }, [token, setMyLocalStorage])

    const deleteDataHandler = useCallback( async (removeFormId: string) =>{
        const updatedData = myLocalStorage.filter(data => data.id !== removeFormId);
        setMyLocalStorage(updatedData);
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
    }, [myLocalStorage, token]);

    const FormList: FormListItem[] & GridRowsProp = useMemo(() => {
        return myLocalStorage? myLocalStorage.map((form:FormData) => ({
            formid: form.id,
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