import React from 'react';
import LoginForm from './LoginForm';
import LoginImage from '../../images/Screenshot from 2023-05-13 18-07-05.png';

const Login = () => {
  return (
    <React.Fragment>
        <div className='login-wapper'>
            <div className='left-canvas'>
                <LoginForm/>
            </div>
            <div className='right-canvas'>
                <img className='right-canvas__image' src={LoginImage}/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login
