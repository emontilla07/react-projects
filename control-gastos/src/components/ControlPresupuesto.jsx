import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';

export const ControlPresupuesto = ({ gastos, setGastos, presupuesto, setPresupuesto, setIsValidPresupuesto }) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1500);
    }, [gastos, presupuesto]);

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');
        
        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={ buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                    }) }
                    text={ `${ porcentaje }% Gastado` }
                    value={ porcentaje }
                />
            </div>

            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={ handleResetApp }
                >
                    Resetear App
                </button>

                <p>
                    <span>Presupuesto: </span> { formatearCantidad(presupuesto) }
                </p>

                <p className={ `${ disponible < 0 ? 'negativo' : '' }` }>
                    <span>Disponible: </span> { formatearCantidad(disponible) }
                </p>

                <p>
                    <span>Gastado: </span> { formatearCantidad(gastado) }
                </p>
            </div>
        </div>
    )
}

ControlPresupuesto.propTypes = {
    gastos: PropTypes.array,
    setGastos: PropTypes.func,
    presupuesto: PropTypes.number,
    setPresupuesto: PropTypes.func,
    setIsValidPresupuesto: PropTypes.func,
};