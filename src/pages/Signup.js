import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignupPage = (props) => {
    const { register, handleSubmit, reset} = useForm();


    const onSubmit = () => {
        console.log("Form submitted");
    }

    return (
        <div className="signin-form">
            <h2>Sign Up</h2>
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