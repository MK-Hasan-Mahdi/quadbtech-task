import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Home = () => {
    const [user, setUser] = useState([]);
    const authUser = useAuthState(auth)
    useEffect(() => {
        setUser(authUser)
    }, [authUser, user]);
    const navigate = useNavigate();
    return (
        <div className='md:flex justify-center mt-10 items-center text-center'>
            <h1 className='inline-block text-xl font-semibold text[] mr-6'>Welcome, <span className='text-[green] text-2xl font-semibold'>{user[0]?.displayName}</span></h1>
            <button className='inline-block btn btn-primary' onClick={async () => {
                await signOut(auth);
                navigate('/');
            }}>Log Out</button>
        </div>
    );
};

export default Home;