import React, { useState } from 'react';
import { signup } from '../firebase/auth';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignupPage = (props) => {
    const { register, handleSubmit, reset} = useForm();
    const [isLoading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const ShowError = (props) => {
        return (
            <p className="error"> { props.message } </p>
        )
    }

    const onSubmit = async (data) => {
        let newUser;
        setLoading(true);
        setErrorMsg(null);

        try {
            newUser = await signup(data);
            reset();
        } catch (error) {
            console.log(error);
            setErrorMsg(error.message);
        } finally {
            setLoading(false);
        }

        if (newUser) {
            props.history.push(`/gifts`);
        } 
    }

    const formClassName = `${isLoading ? 'loading' : ''}`;

    return (
        <div className="signin-form">
            <h2>Sign Up</h2>

            {
                errorMsg && <ShowError message={errorMsg} />

            }

            <form onSubmit={handleSubmit(onSubmit)}  className={formClassName}>

                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email")}>
                </input>

                <label>Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="**********"
                    {...register("password")}>
                </input>

                <label>First Name</label>
                <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    {...register("firstName")}>
                </input>
                <label>Last Name</label>
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    {...register("lastName")}>
                </input> 


                <button type="submit" className="btn btn-primary">Register</button>

                <p>Already registered? <Link to="/login" className='btn btn-secondary'>Login</Link></p>
                     
            </form>
        </div>
    )
}
export default SignupPage;