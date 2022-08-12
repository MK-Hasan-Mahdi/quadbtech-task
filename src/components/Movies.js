import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Movie from './Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setLoading(false);
            });
    }, []);

    // Handle dynamic route
    const handleUserClick = (id) => {
        navigate(`/${id}`);
    }
    return (
        <div className='bg-[#bcc0c9]'>
            <div className="overflow-x-auto container mx-auto pb-20">
                <h1 className='text-center bg-white text-shadow text-2xl md:text-4xl mt-8 mb-5 px-2 md:px-0'>All Information</h1>
                {
                    loading ? <Spinner /> :
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th className='col-span-1'>Serial</th>
                                    <th>Thumbnail</th>
                                    <th>Name</th>
                                    <th>Language</th>
                                    <th>Ratings</th>
                                    <th>Premiered</th>
                                    <th className='text-center'>Time</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    movies?.map((movie, index) => <Movie handleUserClick={handleUserClick} movie={movie} key={index} serial={index} />)
                                }

                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default Movies;