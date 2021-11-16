import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navigation.css'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">

                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><h1>STORE</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'><h6>Home</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Ventas'><h6>Ventas</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Productos'><h6>Inventario</h6></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Users'><h6>Users</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navigation
