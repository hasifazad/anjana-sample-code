import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function View(props) {

    let { data } = props
    let { users } = data

    let { id } = useParams()




    let navigate = useNavigate()
    return (
        <div>
            <h1>{users[id]?.username}</h1>
            <h1>dsfdsd</h1>
            <h1>dsfdsd</h1>


            <button onClick={() => { navigate('/form') }}>BACK</button>
        </div>
    )
}

export default View