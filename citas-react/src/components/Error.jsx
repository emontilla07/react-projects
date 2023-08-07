import PropTypes from 'prop-types';

const Error = ({ mensaje }) => {
    return (
        <div>
            <p className="bg-red-800 font-bold mb-3 p-3 text-center text-white uppercase">{ mensaje }</p>
        </div>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired,
};

export default Error;