/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label `
    color: #FFF;
    display: block;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin: 15px 0;
`

const Select =styled.select `
    border-radius: 10px;
    font-size: 18px;
    padding: 14px;
    width: 100%;
`

export const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <Label>{ label }</Label>
            <Select
                value={ state }
                onChange={ ({ target: { value } }) => setState(value) }
            >
                <option value="">Selecciones</option>
                { opciones.map(({ id, nombre }) => (
                    <option
                        key={ id }
                        value={ id }
                    >
                        { nombre }
                    </option>
                )) }
            </Select>
        </>
    )

    return [state, SelectMonedas];
}
