import React from 'react'
import { FormsProd } from '../components/Forms'
import Tablas from '../components/Tablas'

function Productos() {
    return (
        <div className='Productos'>
            <h2>Registro de Inventario</h2>
            <FormsProd />
            <Tablas />
        </div>
    )
}

export default Productos
