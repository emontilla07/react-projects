import { useState } from 'react';
import { Label, Select } from '../helpers/styles';

export const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('');

    const SelectMonedas = () => (
        <>
            <Label>{ label }</Label>
            <Select 
                value={ state }
                onChange={ ({ target: { value } }) => setState(value) }
            >
                <option value="">- Seleccione</option>
                {
                    opciones.map(({ id, nombre }) => (
                        <option
                            key={ id }
                            value={ id }
                        >
                            { nombre }
                        </option>
                    ))
                }
            </Select>
        </>
    )

    return [state, SelectMonedas];
}
