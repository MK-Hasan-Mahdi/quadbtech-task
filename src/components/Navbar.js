import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, setUser] = useState([]);
    const authUser = useAuthState(auth)
    useEffect(() => {
        setUser(authUser)
    }, [authUser, user]);
    const navigate = useNavigate();
    return (
        <div className='mid-container'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">MovieList</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>

                        <li><a>About</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <div className='md:flex justify-center items-center text-center'>
                        {/* <h1 className='inline-block text-xl font-semibold text[] mr-7'>{user[0]?.displayName}</h1> */}
                        <button className='btn btn-sm btn-primary' onClick={async () => {
                            await signOut(auth);
                            navigate('/');
                        }}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;