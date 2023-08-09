import { NuevoPresupuesto } from './NuevoPresupuesto';
import PropTypes from 'prop-types';

export const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            <NuevoPresupuesto
                presupuesto={ presupuesto }
                setPresupuesto={ setPresupuesto }
            />
        </header>
    )
}

Header.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    setPresupuesto: PropTypes.func.isRequired,
};