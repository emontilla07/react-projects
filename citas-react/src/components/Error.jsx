import PropTypes from 'prop-types';

const Error = ({ children }) => {
    return (
        <div className="bg-red-800 text-white text-center uppercase p-3 mb-3 rounded-md">
            { children }
        </div>
    )
}

Error.propTypes = {
    children: PropTypes.object,
};

export default Error