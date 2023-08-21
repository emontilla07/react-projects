import { NuevoPresupuesto } from './NuevoPresupuesto';
import PropTypes from 'prop-types';
import { ControlPresupuesto } from './ControlPresupuesto';


export const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            { isValidPresupuesto ? (
                <ControlPresupuesto
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
    presupuesto: PropTypes.number,
    setPresupuesto: PropTypes.func,
    isValidPresupuesto: PropTypes.bool,
    setIsValidPresupuesto: PropTypes.func,
};