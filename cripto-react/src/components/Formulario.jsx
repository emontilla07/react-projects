import { useEffect, useState } from 'react';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import styled from '@emotion/styled';
import { monedas } from '../data/monedas';
import { Error } from './Error';

const InputSubmit = styled.input `
    background-color: #9497ff;
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
    padding: 10px;
    text-transform: uppercase;
    transition: background-color .5s ease-in-out;
    width: 100%;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Formulario = () => {
    const [cripto, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectMoneda] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', cripto);

    useEffect(() => {
        const consultarAPI = async() => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const { Data } = resultado;
            
            const arrayCriptos = Data.map(({ CoinInfo: { Name, FullName } }) => {
                const objeto = {
                    id: Name,
                    nombre: FullName,
                };

                return objeto;
            })
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    },  []);

    const handleSubmit = e => {
        e.preventDefault();
        
        if ([moneda, criptomoneda].includes('')) {
            setError(true);
            return;
        }

        setError(false);
    }

    return (
        <>
            { error && <Error>Todos los campos son obligatorios</Error> }

            <form
                onClick={ handleSubmit }
            >
                <SelectMoneda />
                
                <SelectCriptomoneda />

                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />
            </form>
        </>
    )
}
