import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast';
import auth from '../firebase.init';
import Navbar from './Navbar';
import Spinner from './Spinner/Spinner';

const MovieDetail = () => {
    const { id } = useParams();
    // console.log(parseInt(id));
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const user = useAuthState(auth)
    const handleUser = () => {
        localStorage.setItem("user", JSON.stringify({ user, movie: mainData }));
        toast.success('Successfully Purchased.');
    }

    useEffect(() => {
        setLoading(true);
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            });
    }, []);
    // console.log(movies);
    const filterMovie = movies?.filter(item => {
        if (item?.show?.id == id) {
            return item;
        }
    });
    const mainData = filterMovie[0]?.show;
    console.log(mainData);
    return (
        <>
            <Navbar />
            {
                loading ? <Spinner /> :
                    <div className='mid-container'>

                        <div class="card lg:card-side bg-base-100 shadow-xl grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                            <div>
                                <img className='w-full' src={mainData?.image?.original} alt="Album" />
                            </div>
                            <div class="card-body">
                                <h2 className="text-center">{mainData?.name}</h2>
                                <p className='text-center'><span>{mainData?.url}</span>: </p>
                                <p><span className='text-xl font-bold'>Type: </span> {mainData?.type}</p>
                                <p><span className='text-xl font-bold'>Language: </span> {mainData?.language}</p>
                                <p><span className='text-xl font-bold'>Country: </span> {mainData?.network?.country?.name}</p>
                                <p><span className='text-xl font-bold'>Network: </span> {mainData?.network?.name}</p>
                                <p><span className='text-xl font-bold'>Summary: </span> {mainData?.summary}</p>
                                <button onClick={handleUser} className="btn bg-[#212121] button-shadow hover:bg-transparent hover:text-[#212121]  text-white">Purchase</button>
                                <div className="mt-3 justify-end">
                                    <button onClick={() => navigate('/')} className="btn bg-[#212121] button-shadow hover:bg-transparent hover:text-[#212121]  text-white">Go Back to home</button>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </>
    );
};

export default MovieDetail;