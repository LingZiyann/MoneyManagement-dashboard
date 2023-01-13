import classes from './NewForm.module.css';
import { useEffect } from 'react';

const NewForm = (props) => {

    return(
        <div>
            <ul className={classes.Header}>
                <p style={{flex: 1, textAlign: "center"}}>{props.number}</p>
                <p style={{flex: 3}}>{props.activityName}</p>
                <p style={{flex: 2, textAlign:'center'}}>{props.amountSpent}</p>
                <p style={{flex: 2}}>12/11/20</p>
                <p style={{flex: 1}}>Edit</p>   
                <p style={{flex: 1}}>Delete</p>
            </ul>
        </div>
    );
};

export default NewForm;