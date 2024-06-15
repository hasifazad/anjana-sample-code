import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../../redux/store'
import { Link } from 'react-router-dom'

// const API_KEY = ''

function MovieList() {

    // let [movies, setMovies] = useState([])

    let movies = useSelector((state) => { return state.movies.value })

    let dispatch = useDispatch()

    useEffect(() => {

        (async () => {

            try {
                let response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
                console.log(response.data.results);
                // setMovies(response.data.results)

                dispatch(addMovies(response.data.results))
            } catch (error) {
                console.log(error);
            }


        })()

    }, [])


    return (
        <div>
            {
                movies?.map((obj, index) => {

                    return (
                        <div key={index}>
                            <Link to={`/details/${index}`}>
                                <img src={'https://image.tmdb.org/t/p/w500/' + obj.poster_path} height={200} width={100} />
                                <h1>{obj.title}</h1>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieList