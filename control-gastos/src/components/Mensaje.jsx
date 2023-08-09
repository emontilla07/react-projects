import PropTypes from 'prop-types';

export const Mensaje = ({ children, tipo }) => {
    return (
        <div className={ `alerta ${tipo}` }>{ children }</div>
    )
}

Mensaje.propTypes = {
    children: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
};