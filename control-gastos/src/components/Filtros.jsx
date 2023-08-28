// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Filtros = ({ filtro, setFiltro }) => {


    return (
        <div className="contenedor filtros sombra">
            <form>
                <div className="campo">
                    <label htmlFor="">Filtrar Gastos</label>
                    <select
                        value={ filtro }
                        onChange={ e => setFiltro(e.target.value) }
                    >
                        <option value="">-- Todas las Categorías --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

Filtros.propTypes = {
    filtro: PropTypes.string,
    setFiltro: PropTypes.func,
};