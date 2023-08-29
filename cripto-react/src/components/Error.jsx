import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Texto = styled.div `
    background-color: #B7322C;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
`

export const Error = ({ children }) => {
    return (
        <Texto>
            { children }
        </Texto>
    )
}

Error.propTypes = {
    children: PropTypes.string,
};