import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import Tablas from './Tablas'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
               
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/·'>store</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Ventas'>Ventas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Productos'>Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Users'>Users</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                
            </nav>
            
        </div>
    )
}

export default Navigation
