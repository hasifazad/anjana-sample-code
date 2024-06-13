import React from 'react'

import './Details.css'

function Details(props) {

    console.log(props);

    let { data, name } = props;


    return (
        <div className='details'>
            <h1>{data?.username}</h1>
            <h1>{data?.email}</h1>
            <h1>{data?.password}</h1>
        </div>
    )
}

export default Details