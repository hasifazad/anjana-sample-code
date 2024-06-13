import React, { useEffect, useState } from 'react'
import "./Users.css"

import axios from 'axios'

let url = 'https://jsonplaceholder.typicode.com/users'



function Users() {
    let [state, setState] = useState(null)

    useEffect(() => {

        axios.get(url).then((response) => {
            console.log(response);
            setState(response.data)
        }).catch((err) => {
            console.log(err);
        })

    }, [])

    console.log(![]);

    if (!state) {
        return <h1>Loading...</h1>
    }


    return (
        <div className='box'>

            <h1>USERS</h1>
            <h1>HELO WORLD</h1>
            {
                state?.map((obj, i) => {
                    return (
                        <div>
                            <h1 key={obj.id}>{obj.name}</h1>
                        </div>
                    )

                })
            }
        </div>

    )
}

export default React.memo(Users)