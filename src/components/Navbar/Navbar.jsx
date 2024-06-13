import React, { useContext } from 'react'
import './Navbar.css'

import { countContext } from '../../App'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

    let { count } = useContext(countContext)

    let num = useSelector((state) => state.value)



    return (
        <div className='navbar'>
            <h1>Hello world  -  {num}</h1>

            <Link to='/'>home</Link>
            <Link to='/card'>card</Link>
        </div>
    )
}

export default Navbar