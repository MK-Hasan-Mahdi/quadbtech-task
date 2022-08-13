import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
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
        toast.success('Successfully Booked');
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
                        <div className="card lg:card-side bg-base-100 shadow-xl grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                            <div>
                                <img className='w-full' src={mainData?.image?.original} alt="Album" />
                            </div>
                            <div className="card-body">
                                <h2 className="text-center text-4xl font-bold">{mainData?.name}</h2>
                                <p><span className='text-xl font-bold'>Type: </span> {mainData?.type}</p>
                                <p><span className='text-xl font-bold'>Language: </span> {mainData?.language}</p>
                                <p><span className='text-xl font-bold'>Country: </span> {mainData?.network?.country?.name}</p>
                                <p><span className='text-xl font-bold'>Network: </span> {mainData?.network?.name}</p>
                                <p> <span className='text-xl font-bold'>Movie Link: </span> {mainData?.url}</p>
                                <p><span className='text-xl font-bold'>Summary: </span> {mainData?.summary}</p>
                                <Popup trigger={<button className="btn bg-[#212121] button-shadow hover:bg-transparent hover:text-[#212121]  text-white">Booking Movie</button>} position="top center">
                                    <form >
                                        <input type="text" value={mainData?.name} readOnly className="input w-full " />
                                        <input type="text" value={mainData?.network?.name} readOnly className="input w-full  bg-base-300" />
                                        <input type="text" value={`$100`} readOnly className="input w-full " />
                                        <input type="text" value={`${mainData?.schedule?.days[0]}`} readOnly className="input w-full  bg-base-300" />
                                        <div onClick={handleUser} className='btn btn-primary text-center btn-sm'>Confirm Booking</div>
                                    </form>
                                </Popup>
                            </div>
                        </div>

                    </div>
            }
        </>
    );
};

export default MovieDetail;