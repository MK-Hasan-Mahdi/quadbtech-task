import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Movies from './Movies';
import Navbar from './Navbar';

const Home = () => {

    return (
        <div>
            <Navbar />

            <Movies />
        </div>
    );
};

export default Home;