import React from 'react'
import logo from '../logo.svg';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import '../Home.css'

export const Home = () => {
    const [User, setUser] = useState([])
    const navigate = useNavigate();
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            // console.log(res.data);
            setUser(res.data)
        })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            User.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td><button className='btn btn-primary' onClick={() => { navigate(`/albums/${item.id}`) }}>GetDetail</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}
