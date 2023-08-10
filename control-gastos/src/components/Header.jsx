import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto';
import PropTypes from 'prop-types';

export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            { isValidPresupuesto ? (
                <ControlPresupuesto presupuesto={ presupuesto } />
            ) : (
                <NuevoPresupuesto
                    presupuesto={ presupuesto }
                    setPresupuesto={ setPresupuesto }
                    setIsValidPresupuesto={ setIsValidPresupuesto }
                />
            ) }

        </header>
    )
}

Header.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    setPresupuesto: PropTypes.func.isRequired,
    isValidPresupuesto: PropTypes.bool.isRequired,
    setIsValidPresupuesto: PropTypes.func.isRequired,
};