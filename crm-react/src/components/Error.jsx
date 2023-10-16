import PropTypes from 'prop-types';

export const Error = ({ children }) => {
    return (
        <div className="bg-red-600 font-bold my-4 p-3 text-center text-white uppercase">{ children }</div>
    )
}

Error.propTypes = {
    children: PropTypes.string,
};