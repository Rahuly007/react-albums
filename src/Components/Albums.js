import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Albums = () => {
    const id = useParams().id;
    const navigate = useNavigate();
    const [Albums, setAlbums] = useState([])
    const getAlbums = () => {
        axios.get(`https://jsonplaceholder.typicode.com/albums`).then((res) => {
            // console.log(res.data);
            setAlbums(res.data);
        })
    }
    useEffect(() => {
        getAlbums();
    }, [])
    return (
        <div className='container'>
            <div className="row justify-content-center">
                {
                    Albums.filter(person => person.userId == id).map((person) => {
                        return (


                            <div className="col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="card text-center border border-primary">
                                    <div className="card-body">
                                        <h5 className="card-title">{person.id}</h5>
                                        <p className="card-text">{person.title}</p>
                                        <button href="#" className="btn btn-primary" onClick={()=>navigate(`/photos/${person.id}`)}>Photos</button>
                                    </div>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}
