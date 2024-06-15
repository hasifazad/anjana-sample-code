import React, { createContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import "./App.css"
import Card from './components/Card/Card'
import Users from './components/Users/Users'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'
import View from './components/View/View'
import Display from './components/Display/Display'


import { Provider } from 'react-redux'
import { store } from './redux/store'
import MovieList from './components/MovieList/MovieList'
import Details from './components/Details/Details'


export let countContext = createContext()

function App() {
    let [num, setNum] = useState(true)

    let [count, setCount] = useState(0)

    // console.log('app component');

    let data = localStorage.getItem('userdata') || '[]'
    let arr = JSON.parse(data)


    let [users, setUsers] = useState(arr)




    return (
        <>


            <countContext.Provider value={{ count, setCount }}>

                <Provider store={store}>


                    <BrowserRouter>
                        <Navbar />
                        <Routes>

                            <Route path='/' element={<Home />} />
                            <Route path='/card' element={<Card />} />
                            <Route path='/form' element={<Form data={{ users, setUsers }} />} />
                            <Route path='/view/:id' element={<View data={{ users }} />} />
                            <Route path='/display' element={<Display />} />
                            <Route path='/movies' element={<MovieList />} />
                            <Route path='/details/:id' element={<Details />} />
                            <Route path='/*' element={<h1>ERROR </h1>} />

                        </Routes>

                    </BrowserRouter>

                </Provider>


            </countContext.Provider>

        </>
    )
}

export default App

