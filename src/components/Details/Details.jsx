import React from 'react'

import './Details.css'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details(props) {

    console.log(props);

    let { id } = useParams()

    let details = useSelector((state) => state.movies.value[id])


    return (
        <div className='details'>
            <img src={'https://image.tmdb.org/t/p/w500/' + details.poster_path} height={200} width={100} />
            <h1>{details.title}</h1>
            <p>{details.overview}</p>
        </div>
    )
}

export default Details

// frnky.frk@gmail.com