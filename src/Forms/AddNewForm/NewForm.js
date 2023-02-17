import classes from './NewForm.module.css';
import { useEffect } from 'react';

const NewForm = (props) => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return(
            <tr className={classes.Header}>
                <td>{props.number}</td>
                <td>{props.activityName}</td>
                <td>{props.amountSpent}</td>
                <td>{date}</td>
                <td>{props.radioData}</td>   
                <td>Delete</td>
            </tr>
    );
};

export default NewForm;