import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MovieList() {

    let [movies, setMovies] = useState([])

    useEffect(() => {

        (async () => {

            try {
                let response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=842da3b5db8af98a93f5ec6403d63fcf')
                console.log(response.data.results);
                setMovies(response.data.results)
            } catch (error) {
                console.log(error);
            }


        })()

    }, [])


    return (
        <div>
            {
                movies.map((obj, index) => {

                    return (
                        <div key={index}>
                            <img src={'https://image.tmdb.org/t/p/w500/' + obj.poster_path} height={200} width={100} />
                            <h1>{obj.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieList