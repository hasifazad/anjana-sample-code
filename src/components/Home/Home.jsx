import React, { useContext, useEffect } from 'react'
import './Home.css'
import { countContext } from '../../App'
import Card from '../Card/Card'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

let data = [
    { name: 'john', age: 45, place: 'kerala' },
    { name: 'sfddsf', age: 55, place: 'kdsf' },
    { name: 'jsdfsf', age: 65, place: 'kerdfsf' },
    { name: 'sdfsf', age: 48, place: 'sdfdsfla' },
    { name: 'jdfdsf', age: 95, place: 'sdfdsfala' },
]

let URL = 'https://jsonplaceholder.typicode.com/users'

function Home() {

    let { count, setCount } = useContext(countContext)
    let nav = useNavigate()

    let movies = useSelector((state) => state.movies.value)



    useEffect(() => {

        (async () => {
            try {
                let result = await axios.get(URL)
                console.log(result.data);
                // nav('/form')
            } catch (error) {
                console.log(error);
            }
        })();

    }, [])

    function toHome() {
    }



    return (
        <div className='home'>

            <h1>{movies[10].title}</h1>
            <img src={'https://image.tmdb.org/t/p/w500/' + movies[10].poster_path} height={200} width={100}/>
                <h1>HOME</h1>
                {/* <h1>{num}</h1> */}
                {/* <h1>{count}</h1> */}

                <button onClick={() => { setCount(count + 1) }}>click</button>

                {/* <button onClick={() => { setShow(!show) }}>{show ? 'HIDE' : 'SHOW'}</button> */}

                <Link to='/card'>CARD</Link>




                <button onClick={toHome}>to card</button>


                <></>
        </div>
    )
}

export default Home