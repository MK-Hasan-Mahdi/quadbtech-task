import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import Movie from './Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    // console.log(movies);
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
        <div className='mid-container'>
            <div className='bg-gray mt-12'>
                <div className="overflow-x-auto container mx-auto pb-20">
                    <h1 className='text-center bg-white text-shadow text-2xl md:text-4xl mt-8 mb-10 px-2 md:px-0 font-bold'>All Movies</h1>
                    {
                        loading ? <Spinner /> :
                            <div class="overflow-x-auto">
                                <table class="table table-compact w-full">
                                    <thead>
                                        <tr>
                                            <th className='py-5'>Serial</th>
                                            <th>Thumbnail</th>
                                            <th>Name</th>
                                            <th>Language</th>
                                            <th>Genres</th>
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
                            </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Movies;