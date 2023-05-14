import React, { useState } from 'react';
import Cookies from "js-cookie";
import { Form } from "react-final-form";
import UiInputs, { UiLoginCheckBox } from '../common/UiInput';
import { UiButtonPrimary } from '../common/UIButtons';
import { useDispatch } from "react-redux";
import { authLoginComplete } from '../../_redux/_actions/auth.actions';
import {v4 as uuidv4} from 'uuid';

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const actionDispatch = useDispatch();
    const submit = async (values) => {
        let myuuid = uuidv4();
        if(values.username === 'admin' && values.password === 'admin'){
            Cookies.set("inter_ib_login", true);
            //Cookies.set('uuid', uuid());

            console.log(uuid());

            window.location.reload(true);
            const user = {
                username:'Matt Appleyard',
                userType:'Admin'
            }
            actionDispatch(authLoginComplete(user));
            
        }else {
            setErrorMessage(true)
        }
    };
  return (
    <React.Fragment>
        <div className='login-canvas'>
            <Form
            onSubmit={submit}
            render={({
                form,
                handleSubmit,
            }) => {
                return(
                <form>
                    <UiInputs
                        name="username"
                        id="inputUserName"
                        label="Username"
                        type="text"
                        clearable={true}
                        maxLength={20}
                        form={form}
                        autoComplete={false}
                    />
                    <UiInputs
                        name="password"
                        id="inputUserPw"
                        label="Password"
                        type="password"
                        clearable={true}
                        maxLength="20"
                        form={form}
                        autoComplete={false}
                    />
                    <div className='inter-auth__login__form__separator'/>
                    <UiLoginCheckBox/>
                    <div className='inter-auth__login__form__separator'/>
                    <UiButtonPrimary
                        size={"lg"}
                        isLoading={false}
                        text="Login"
                        type={'button'}
                        onClick={handleSubmit}
                    />
                    <div className='inter-auth__login__form__separator'/>
                    <span>Or <a href='' className='login-canvas__link'>register now!</a></span>
                    <div className='inter-auth__login__form__separator'/>
                    {errorMessage ? <span className='login-canvas__errorMessage'>User name or password incorrect</span> : ""}
                </form>
                )
            }} 
            />
        </div>
    </React.Fragment>
  )
}

export default LoginForm
