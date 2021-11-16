import React from 'react';
import '../styles/Forms.css'

const Forms = () => {
    return (
        <div>
            <h4>Venta</h4>
            <form className='formVentas'>
                <label for="Idventa">Id. venta</label>
                <input type="text" name="Idventa" id="Idventa" placeholder="000000000" />
                <br />
                <label for="nombreCliente">Nombre del cliente</label>
                <input type="text" name="nombreCliente" id="nombreCliente" placeholder="000000000" />
                <br />
                <p>Tipo de identificación</p>
                <label for="CC">CC</label>
                <input type="checkbox" name="ID" id="CC" />
                <label for="T.I">T.I</label>
                <input type="checkbox" name="ID" id="T.I" />
                <label for="CE">CE</label>
                <input type="checkbox" name="ID" id="CE" />
                <br />
                <label for="Idcliente">Id. cliente</label>
                <input type="text" name="Idcliente" id="Idcliente" placeholder="000000000" />
                <br />

                <button type="button">Registrar</button>
                <button type="button">Buscar</button>
                <button type="button">Actualizar</button>
                <button type="button">Borrar</button>
            </form>


        </div>
    )
}

const FormsProd = () => {
    return (

        <div>
            <div className='divFormInv'>
                <h4>Registrar Producto</h4>
                <form className='formInv'>
                    <label for="id">Id. Producto</label>
                    <input type="number" name="id" id="id" placeholder="000000000" />
                    <br />
                    <label for="producto">Nombre</label>
                    <input type="text" name="producto" id="producto" placeholder="Mercedez Slk200" />
                    <br />
                    <label for="cant-Producto">Cantidad</label>
                    <input type="number" name="cant-Producto" id="cant-Producto" placeholder="Unidades" />
                    <br />
                    <label for="vrUnitario">Vr. Unitario</label>
                    <input type="number" name="vr.unitario" id="vrUnitario" placeholder="en pesos" />
                    <br />

                    <button type="button">Registrar</button>
                    <button type="button">Buscar</button>
                    <button type="button">Actualizar</button>
                    <button type="button">Borrar</button>
                </form>

            </div>
        </div>


    )
}

export { FormsProd }
export default Forms
