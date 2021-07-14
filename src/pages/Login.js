import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../firebase/auth';

const LoginPage = (props) => {
    const { register, handleSubmit, reset} = useForm();
    
    const onSubmit = async (data) => {
        let user;
        console.log("form submitted");
        try {
            user = await login(data);
            reset();
        } catch (error) {
            console.log(error);
        }

        if (user) {
            props.history.push(`/gifts`);
        }
    }

    return (
        <div className="signin-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

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

            <button type="submit" className="btn btn-primary">Sign In</button>
            
            <p>No Account? <Link to="/signup" className='btn btn-secondary'>Sign Up</Link></p>
            </form>
        </div>
    )
}
export default LoginPage;