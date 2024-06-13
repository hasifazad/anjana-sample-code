import React, { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom';



function Card({ data }) {


    // let [state, setState] = useState(data)

    console.log(data);






    return (
        <>

            <h1>CARD</h1>

            <Link to='/'>HOME</Link>


        </>
    )
}

export default Card