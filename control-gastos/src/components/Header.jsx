import { NuevoPresupuesto } from './NuevoPresupuesto';
import PropTypes from 'prop-types';
import { ControlPresupuesto } from './ControlPresupuesto';


export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            { isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={ gastos }
                    setGastos={ setGastos }
                    presupuesto={ presupuesto }
                    setPresupuesto={ setPresupuesto }
                    setIsValidPresupuesto={ setIsValidPresupuesto }
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={ presupuesto }
                    setPresupuesto={ setPresupuesto }c
                    setIsValidPresupuesto={ setIsValidPresupuesto }
                />
            ) }
        </header>
    )
}

Header.propTypes = {
    gastos: PropTypes.array,
    setGastos: PropTypes.func,
    presupuesto: PropTypes.number,
    setPresupuesto: PropTypes.func,
    isValidPresupuesto: PropTypes.bool,
    setIsValidPresupuesto: PropTypes.func,
};