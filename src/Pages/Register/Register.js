import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const handleSubmitRegister = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
         
    }
    const navigateLogin = (e) =>{
        navigate('/login')
    }
    return (
        <div>
            <h2 className='text-center'>Please Register</h2>
            <div className="container">
                <div className="row w-50 mx-auto">
                    <form onSubmit={handleSubmitRegister} className='register-form'>
                        <input type="text" name="name" id="" placeholder='your name' />

                        <input type="email" name="email" id="" placeholder='email address' />
                        <input type="password" name="password" id="" placeholder='password' />
                        <input type="submit" value="Register" />
                    </form>
                    <p>Already Register? <Link to='/login'className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login?</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;