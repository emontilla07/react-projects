import { useState } from 'react';
import PropTypes from 'prop-types';
import { Mensaje } from './Mensaje';

export const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();

        if (!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto valido');
            return;
        }
        
        setMensaje('');
        setIsValidPresupuesto(true);
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
                        type="number"
                        value={ presupuesto }
                        onChange={({ target: { value } }) => setPresupuesto(Number(value))}
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
    presupuesto: PropTypes.number.isRequired,
    setPresupuesto: PropTypes.func.isRequired,
    setIsValidPresupuesto: PropTypes.func,
};