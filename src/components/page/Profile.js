import React from 'react'
import { Link } from 'react-router-dom';



const Profile = () => {
    
    return (
        <div>
            <form className='profile'>
                <img ref=''/>
                <label for='user'>Usuario</label>
                <input type='email' name='email' id='user' placeholder='mxxxxxxx@gmail.com'/>
                <label for='userpassword'>Contraseña</label>
                <input type='password' name='userpassword' id='userpassword' placeholder='mxxxxxxx@gmail.com'/>
                <button type='button' onClick={Link} >ingresar</button>
            </form>
        </div>
    )
}

export default Profile;