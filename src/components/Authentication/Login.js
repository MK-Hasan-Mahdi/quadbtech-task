import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const [
        signInWithEmailAndPassword,
        , , error,
    ] = useSignInWithEmailAndPassword(auth);
    const user = useAuthState(auth);
    // console.log(user[0]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user[0]) {
            navigate('/home');
        }
    }, [user])


    const onSubmitParam = data => {
        signInWithEmailAndPassword(data.email, data.password);

        if (error?.message?.includes('auth/user-not-found')) {
            toast.error('User not found');
            return;
        } else if (error?.message?.includes('auth/wrong-password')) {
            toast.error('Password is incorrect');
            return;
        }

        reset();
        toast.success('Successfully logged in.');

    }
    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit(onSubmitParam)}>
                <h1>Sign In</h1>
                <div className="social-links">
                    <div>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid Email"
                        }
                    })}
                    onKeyUp={(e) => {
                        trigger('email')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font_size'>{errors?.email?.message}</small>

                <input type="password" placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Minimum eight characters, at least one letter and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('password')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font_size'>{errors?.password?.message}</small>

                <button type='submit' className="form_btn">Sign In</button>
            </form>
        </div>
    );
};

export default Login;