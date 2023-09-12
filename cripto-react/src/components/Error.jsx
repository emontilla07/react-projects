import PropTypes from 'prop-types';
import { Texto } from '../helpers/styles';

export const Error = ({ children }) => {
    return (
        <Texto>{ children }</Texto>
    )
}

Error.propTypes = {
    children: PropTypes.string,
};