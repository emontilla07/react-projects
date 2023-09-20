import styled from '@emotion/styled';

const Label = styled.label `
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select `
    border-radius: 10px;
    font-size: 18px;
    padding: 14px;
    width: 100%;
`

const Texto = styled.div `
    background-color: #b7322c;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
`

const Contenedor = styled.div `
    align-items: center;
    color: #fff;
    display: flex;
    font-family: 'Lato', sans-serif;
    gap: 1rem;
    margin-top: 30px;
`

const Info = styled.p `
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p `
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Imagen = styled.img `
    display: block;
    width: 100px;
`

export {
    Label,
    Select,
    Texto,
    Contenedor,
    Info,
    Precio,
    Imagen,
};