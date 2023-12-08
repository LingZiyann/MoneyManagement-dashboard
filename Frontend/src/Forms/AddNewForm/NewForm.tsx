import classes from './NewForm.module.css';
interface newFormProps {
    key?: string;
    buttonId?: string;
    date: string;
    number: number;
    activityName:string;
    amountSpent:string; 
    radioData: string;
    deleteForm(e: React.MouseEvent<HTMLButtonElement>) : void;
}

const NewForm = (props: newFormProps) => {

    // async function deleteDataHandler (data, removeFormId) {
    //     const response = await fetch(`https://money-management-5452c-default-rtdb.asia-southeast1.firebasedatabase.app/transactions/${removeFormId}.json`, {
    //         method: 'DELETE',
    //         body: JSON.stringify(data),
    //     });
    // };

    return(
        // <table>
            <tbody>
                <tr className={classes.Header}>
                    <td>{props.number}</td>
                    <td>{props.activityName}</td>
                    <td>{props.amountSpent}</td>
                    <td>{props.date}</td>
                    <td>{props.radioData}</td>   
                    <td><button className={classes.button} onClick={props.deleteForm} id={props.buttonId}>Delete</button></td>
                </tr>
            </tbody>
        // </table>
    );
};

export default NewForm;