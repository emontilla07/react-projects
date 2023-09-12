import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';
import { Error } from './Error';

const InputSubmit = styled.input `
    background-color: #9497ff;
    border: none;
    border-radius: 8px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
    padding: 10px;
    text-transform: uppercase;
    transition: background-color .5s ease; 
    width: 100%;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Formulario = () => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
            const respuesta = await fetch(url);
            const { Data } = await respuesta.json();
            
            const arrayCriptos = Data.map(({ CoinInfo: { Name, FullName } }) => {
                const objeto = {
                    id: Name,
                    nombre: FullName,
                };
                return objeto;
            });
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        
        ([moneda, criptomoneda].includes('') ? setError(true) : setError(false));
    }

    return (
        <>
            { error && <Error>Todos los campos son obligatorios</Error> }
            <form
                onSubmit={ handleSubmit }
            >
                <SelectMonedas />
                <SelectCriptomonedas />

                <InputSubmit
                    type="submit"
                    value="Cotiza"
                />
            </form>
        </>
    )
}
