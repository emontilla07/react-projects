import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

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

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);

    useEffect(() => {
        const consultarAPI = async() => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
            const respuesta = await fetch(url);
            const { Data } = await respuesta.json();
            
            const arrayCriptos = Data.map(({ Name, FullName }) => {
                const objeto = {
                    id: Name,
                    nombre: FullName,
                };
                return objeto;
            });

            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, [])

    return (
        <form>
            <SelectMonedas />

            <InputSubmit
                type="submit"
                value="Cotiza"
            />
        </form>
    )
}
