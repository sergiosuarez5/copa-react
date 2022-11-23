import React, { useRef } from "react";
const Checkout = () => {
    const datosFormulario = React.useRef()
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        console.log(valores)
        e.target.reset()


    }



    return (
        <div className="container">
            <form onSubmit={consultarFormulario} className="text-center" ref={datosFormulario}>
                <div className="mb-3 text-center">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" />
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="celular" className="form-label">Numero Telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3 text-center">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary text-center">Finalizar compra</button>
            </form>

            
        </div>
    );
}

export default Checkout;
