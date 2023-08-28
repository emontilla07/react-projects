import { Gasto } from './Gasto';
import PropTypes from 'prop-types';

export const ListadoGastos = ({ gastos, setGastoEditar, eliminarGastos, filtro, gastosFiltrados }) => {
    return (
        
        <div className="listado-gastos contenedor">
            {
                filtro ? (
                    <>
                        <h2>{ gastosFiltrados.length ? 'Gastos' : 'No hay gastos aun' }</h2>
                        { gastosFiltrados.map(gasto => (
                            <Gasto
                                key={ gasto.id }
                                gasto={ gasto }
                                setGastoEditar={ setGastoEditar }
                                eliminarGastos={ eliminarGastos }
                            />
                        )) }
                    </>
                ) : (
                    <>
                        <h2>{ gastos.length ? 'Gastos' : 'No hay gastos aun' }</h2>
                        { gastos.map(gasto => (
                            <Gasto
                                key={ gasto.id }
                                gasto={ gasto }
                                setGastoEditar={ setGastoEditar }
                                eliminarGastos={ eliminarGastos }
                            />
                        )) }
                    </>
                )
            }
        </div>
    )
}

ListadoGastos.propTypes = {
    gastos: PropTypes.array,
    setGastoEditar: PropTypes.func,
    eliminarGastos: PropTypes.func,
    filtro: PropTypes.string,
    gastosFiltrados: PropTypes.array,
};