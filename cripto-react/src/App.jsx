import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';
import ImagenCripto from './img/imagen-criptos.png';

const Contenedor = styled.div `
    margin: 0 auto;
    max-width: 900px;
    width: 90%;
    @media (min-width: 992px) {
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

const Imagen = styled.img `
    display: block;
    margin: 100px auto 0 auto;
    max-width: 400px;
    width: 80%;
`

const Heading = styled.h1 `
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 50px;
    margin-top: 80px;
    text-align: center;
    &::after {
        content: '';
        background-color: #66a2fe;
        display: block;
        margin: 10px auto 0 auto;
        height: 6px;
        width: 100px;
    }
`

export const App = () => {
    return (
        <Contenedor>
            <Imagen
                src={ ImagenCripto }
                alt="imagenes criptomonedas"
            />

            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>
                <Formulario />
            </div>
        </Contenedor>
    )
}
