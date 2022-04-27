import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Photos = () => {
    const id = useParams().id
    const [Photos, setPhotos] = useState([])
    const getPhotos = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
            setPhotos(res.data);
        })
    }
    useEffect(() => {
        getPhotos();
    }, [])

    return (
        // <div classNameName="card-deck">
        //     {
        //         Photos.filter(album => album.albumId == id).map((album) => {
        //             return (
        //                 <div classNameName="card">
        //                     {/* <img classNameName="card-img-top" src={album.thumbnailUrl} alt='image' /> */}
        //                     <div classNameName="card-body">
        //                         <h5 classNameName="card-title">{album.id}</h5>
        //                         <p classNameName="card-text">{album.title}</p>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
        <div className='container'>
            <div className="row justify-content-center">
                {
                    Photos.filter(album => album.albumId == id).map((album) => {
                        return (
                            <div className='col-md-4 shadow-lg p-3 mb-5 bg-white rounded'>
                                <div className="card " style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={album.thumbnailUrl} alt="Card image cap" />
                                    <div className="card-body text-center">
                                        <h2 className="card-title">{album.id}</h2>
                                        <p className="card-text">{album.title}</p>
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
