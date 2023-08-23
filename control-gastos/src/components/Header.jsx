import { NuevoPresupuesto } from './NuevoPresupuesto';
import PropTypes from 'prop-types';
import { ControlPresupuesto } from './ControlPresupuesto';


export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            { isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={ gastos }
                    presupuesto={ presupuesto }
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
    presupuesto: PropTypes.number,
    setPresupuesto: PropTypes.func,
    isValidPresupuesto: PropTypes.bool,
    setIsValidPresupuesto: PropTypes.func,
};