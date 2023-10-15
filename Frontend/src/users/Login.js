import { useReducer, useRef, useState, useContext, useNavigate } from "react";
import { AuthContext } from "../context/auth-context";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



const Login = () => {
    const auth = useContext(AuthContext);
    const nameInputRef = useRef();
    const passwordInputRef = useRef();
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
            default:
                return state;
            };
        };

    const [formState, dispatch] = useReducer(formReducer, {
        formTouched: false,
        isValid: false,
    });

    const signup = async function (e) {
        e.preventDefault();
        setIsLoading(true);
        if (formState.formTouched && formState.isValid){
            try {
                console.log('loging in!')
                const response = await fetch( process.env.REACT_APP_BACKEND_URL + `/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        name: nameInputRef.current.value,
                        password: passwordInputRef.current.value
                    })
                });
                const data = await response.json();
                const token = data.token;
                const uid = data.user._id;
                const tokenExpirationDate =  new Date(new Date().getTime() + 1000 * 60 * 60)
                auth.login(uid, token, tokenExpirationDate)
                if (response.status === 404){
                    setWrongCredentials(true);
                }
                setWrongCredentials(false);
                setIsLoading(false);
            } catch (err) {
                setWrongCredentials(true);
                setIsLoading(false);
            }
        } else {
            setWrongCredentials(true);
            setIsLoading(false);
        }
    };

    const inputChangeHandler = () => {
        dispatch({
            type: 'Input_Change'
        });
    };
    const imageUrl = process.env.PUBLIC_URL + '/2023-10-15.png'

    return(
        <div className={classes.container}>
            <div className={classes.navbar}>
                <h1>MoneyManagement</h1>
            </div>
            <main className={classes.content}>
                <form className={classes.form} onSubmit={signup}>
                    <h1>Welcome!</h1>
                    <div>
                        <label for='name'>Name</label>
                        <input id='name' name='name' type='text' ref={nameInputRef} onInput={inputChangeHandler}></input>
                    </div>
                    <div>
                        <label for='password'>Password</label>
                        <input id="password" name="password" type='password' ref={passwordInputRef} onInput={inputChangeHandler}></input>
                    </div>
                    <button className={classes.button}>Login</button>
                    {isLoading && <ClipLoader color={"#123abc"} loading={isLoading} size={50} />}
                    {wrongCredentials && <h2 style={{color: '#ff3333'}}>Wrong Username/Password!</h2>}
                    <NavLink to='/SignUp'>Dont a account? Sign up instead</NavLink>
                </form>
                <img src={imageUrl} alt="demoImage"></img>
            </main>

        </div>
    )
}

export default Login;