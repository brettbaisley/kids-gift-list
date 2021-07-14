import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = (props) => {
    const { register, handleSubmit, reset} = useForm();
    
    const onSubmit = () => {
        console.log("Form submitted");
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

            <button type="submit">Sign In</button>
            
            <p>No Account? <Link to="/signup" >Sign Up</Link></p>
            </form>
        </div>
    )
}
export default LoginPage;