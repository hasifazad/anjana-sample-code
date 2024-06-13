import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament } from '../../redux/store'

function Display() {

    let count = useSelector((state) => { return state.value })

    console.log(count);

    let dispatch = useDispatch()
    function increase() {
        dispatch(increament())
    }

    return (
        <>
            <h1>{count}</h1>

            <button onClick={increase}>increase</button>
            <button onClick={() => { dispatch(decreament()) }}>decrease</button>
        </>
    )
}

export default Display