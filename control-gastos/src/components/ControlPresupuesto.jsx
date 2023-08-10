import PropTypes from 'prop-types';

export const ControlPresupuesto = ({ presupuesto }) => {
    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aqui</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{ formatearCantidad(presupuesto) }
                </p>
            </div>
            
            <div className="contenido-presupuesto">
                <p>
                    <span>Disponible: </span>{ formatearCantidad(0) }
                </p>
            </div>
            
            <div className="contenido-presupuesto">
                <p>
                    <span>Gastado: </span>{ formatearCantidad(0) }
                </p>
            </div>
        </div>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
}