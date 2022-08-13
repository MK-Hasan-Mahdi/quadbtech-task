import React from 'react';
import { useNavigate } from 'react-router-dom';

const Movie = ({ movie, serial, handleUserClick }) => {
    const { id, name, language, image, rating, schedule, premiered, genres } = movie.show;
    const navigate = useNavigate();

    return (

        <tr onClick={() => navigate(`/movie/${id}`)} className="hover cursor-pointer">
            <th>{serial + 1}</th>
            <td> <img src={image?.medium} className="h-20 rounded" alt="" /> </td>
            <td className='col-span-2'>{name}</td>
            <td>{language}</td>
            <td>{genres}</td>
            <td>{`${rating.average ? rating.average : 'Not Available'}`}</td>
            <td>{premiered}</td>
            <td> <span>{schedule.days[0]} : {schedule?.time ? schedule?.time?.split(":")[0] > 12 ? `${schedule.time} PM` : `${schedule.time} AM` : schedule.time} </span></td>
        </tr>
    );
};

export default Movie;