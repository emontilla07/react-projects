import { Gasto } from './Gasto';
import PropTypes from 'prop-types';

export const ListadoGastos = ({ gastos, setGastoEditar }) => {
    return (
        
        <div className="listado-gastos contenedor">
            <h2>{ gastos.length ? 'Gastos' : 'No hay gastos aun' }</h2>

            { gastos.map(gasto => (
                <Gasto key={ gasto.id } gasto={ gasto } setGastoEditar={ setGastoEditar } />
            )) }
        </div>
    )
}

ListadoGastos.propTypes = {
    gastos: PropTypes.array,
    setGastoEditar: PropTypes.func,
};