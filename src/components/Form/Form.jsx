import React, { useRef, useState } from 'react'
import './Form.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Details from '../Details/Details'

function Form(props) {

    let { data } = props
    let { users, setUsers } = data


    let [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    })



    let [view, setView] = useState(null)


    function getData(event) {

        setState({
            ...state,
            [event.target.name]: event.target.value
        })



    }

    function addData() {
        setUsers([...users, state])

        let res = JSON.stringify([...users, state])
        console.log(res);
        localStorage.setItem('userdata', res)
    }




    function deleteData(id) {
        let newArr = users.filter((obj, i) => {
            if (i !== id) {
                return obj
            }
        })
        setUsers([...newArr])
        setView(null)
    }

    function displayData(id) {

        setView(users[id])

    }

    let navigate = useNavigate()
    function viewData(id) {

        navigate(`/view/${id}`)

    }

    let [num, setNum] = useState(null);
    let [edit, setEdit] = useState(false);



    function editData(id) {

        setState({
            username: users[id].username,
            email: users[id].email,
            password: users[id].password,
        })
        setEdit(true)


        setNum(id)

    }



    function addEditedData() {
        users[num] = state


        setUsers([...users])

        setEdit(false)

        setState({
            username: '',
            email: '',
            password: ''
        })
    }






    return (
        <>
            <div className='form-box' id='hello'>
                {/* <h1>username : {state.username}</h1>
            <h1>email : {state.email}</h1>
            <h1>password : {state.password}</h1> */}
                <form>
                    <div>
                        <label>USERNAME</label>
                        <input name='username' type='text' onChange={getData} value={state.username} />
                    </div>
                    <br />

                    <div>
                        <label>EMAIL</label>
                        <input name='email' type='text' onChange={getData} value={state.email} />
                    </div>
                    <br />

                    <div>
                        <label>PASSOWORD</label>
                        <input name='password' type='text' onChange={getData} value={state.password} />
                    </div>

                    {
                        edit ? <button type='button' onClick={addEditedData}>Edit</button>
                            : <button type='button' onClick={addData}>submit</button>
                    }



                </form>
            </div>


            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSOWORD</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((obj, i) => {

                                return (
                                    <tr key={i}>
                                        <td>{obj?.username}</td>
                                        <td>{obj?.email}</td>
                                        <td>{obj?.password}</td>
                                        <td><button onClick={() => { displayData(i) }}>SHOW</button></td>
                                        <td><button onClick={() => { viewData(i) }}>VIEW</button></td>
                                        <td><button onClick={() => { editData(i) }}>EDIT</button></td>
                                        <td><button onClick={() => { deleteData(i) }}>DELETE</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <Details data={view} name={'hello'} />

            </div>
        </>
    )
}

export default Form


























// console.log(event.target.value);
// if (event.target.name == 'username') {
//     setState({
//         ...state,
//         username: event.target.value
//     })
// } else if (event.target.name == 'email') {
//     setState({
//         ...state,
//         email: event.target.value
//     })
// } else if (event.target.name == 'password') {
//     setState({
//         ...state,
//         password: event.target.value
//     })
// }
// console.log(event.target.name);