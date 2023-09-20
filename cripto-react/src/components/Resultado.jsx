import PropTypes from 'prop-types';
import { Contenedor, Info, Precio, Imagen } from '../helpers/styles';

export const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;

    return (
        <Contenedor>
            <Imagen src={ `https://cryptocompare.com/${ IMAGEURL }` } alt="imagen cripto" />

            <div>
                <Precio>El Precio es de: <span>{ PRICE }</span></Precio>
                <Info>Precio más alto del día: <span>{ HIGHDAY }</span></Info>
                <Info>Precio más bajo del día: <span>{ LOWDAY }</span></Info>
                <Info>Variación últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></Info>
                <Info>Última actualización: <span>{ LASTUPDATE }</span></Info>
            </div>
        </Contenedor>
    )
}

Resultado.propTypes = {
    resultado: PropTypes.object,
};