import { useState } from 'react';
import PropTypes from 'prop-types';
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();

        (!Number(presupuesto) || Number(presupuesto) < 0) ? setMensaje('No es un presupuesto válido') : console.log('Si es un presupuesto válido');
    }

    return (
        <div
            className="contenedor-presupuesto contenedor sombra"
            onSubmit={ handlePresupuesto }
        >
            <form
                className="formulario"
            >
                <div
                    className="campo"
                >
                    <label>Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        type="text"
                        value={ presupuesto }
                        onChange={({ target: { value } }) => setPresupuesto(value)}
                    />

                    <input
                        type="submit"
                        value="Añadir"
                    />

                    { mensaje && <Mensaje tipo="error">{ mensaje }</Mensaje> }
                </div>
            </form>
        </div>
    )
}

NuevoPresupuesto.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    setPresupuesto: PropTypes.func.isRequired,
};