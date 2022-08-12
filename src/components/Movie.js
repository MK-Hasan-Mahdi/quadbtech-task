import React from 'react';

const Movie = ({ movie, serial, handleUserClick }) => {
    const { id, name, language, image, rating, schedule, premiered } = movie.show;
    return (
        <tr onClick={() => handleUserClick(id)} className="hover cursor-pointer">
            <th>{serial + 1}</th>
            <td> <img src={image?.medium} className="h-20 rounded" alt="" /> </td>
            <td className='col-span-2'>{name}</td>
            <td>{language}</td>
            <td>{rating.average}</td>
            <td>{premiered}</td>
            <td> <span>{schedule.days[0]} : {schedule?.time ? schedule?.time?.split(":")[0] > 12 ? `${schedule.time} PM` : `${schedule.time} AM` : schedule.time} </span></td>
            <td>{ }</td>
        </tr>
    );
};

export default Movie;