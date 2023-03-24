import classes from './Login.modules.css';
import { useReducer, useRef, useState } from "react";

const Login = () => {
    const nameInputRef = useRef();
    const passwordInputRef = useRef();
    const [nameTaken, setNameTaken] = useState(false);
    const [showError, setShowError] = useState(false);

    const formReducer = (state, action) => {
        switch(action.type){
            case 'Input_Change':
                if (nameInputRef.current.value && passwordInputRef.current.value){
                    return {
                        isValid: true,
                        formTouched: true
                    };
                } else {
                    return {
                    formTouched: false,
                    isValid: false,
                    };
                }
            };
        };

    const [formState, dispatch] = useReducer(formReducer, {
        formTouched: false,
        isValid: false,
    });

    const signup = async function (e) {
        e.preventDefault()
        if (formState.formTouched && formState.isValid){
            try {
                console.log('signing up!')
                const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        name: nameInputRef.current.value,
                        password: passwordInputRef.current.value
                    })
                });
                const data = await response.json()
                const token = data.token;
                localStorage.setItem('token', token)
                console.log(localStorage.getItem('token'))
                if (response.status === 403){
                    setNameTaken(true);
                }
                setShowError(false)
            } catch (err) {
                console.log(err);
            }
        } else {
            setShowError(true)
        }
    };

    const inputChangeHandler = () => {
        dispatch({
            type: 'Input_Change'
        });
    };


    return(
        <div className={classes.card}>
            <form className={classes.form} onSubmit={signup}>
                <div>
                    <label for='name'>Name</label>
                    <input id='name' name='name' type='text' ref={nameInputRef} onInput={inputChangeHandler}></input>
                </div>
                <div>
                    <label for='password'>Password</label>
                    <input id="password" name="password" type='text' ref={passwordInputRef} onInput={inputChangeHandler}></input>
                </div>
                <button>Sign up</button>
                {nameTaken && <h2 style={{color: '#ff3333'}}>name taken!</h2>}
                {showError && <h2 style={{color: '#ff3333'}}>Please fill up the blanks</h2>}
            </form>
        </div>
    )
}

export default Login;