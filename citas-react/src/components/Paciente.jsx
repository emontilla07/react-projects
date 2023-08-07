import PropTypes from 'prop-types';

const Paciente = ({ paciente, setPaciente }) => {
    const { nombre, propietario, email, fecha, sintoma } = paciente;

    return (
        <div className="bg-white mx-5 my-10 px-5 py-10 rounded-lg shadow-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{ nombre }</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">{ propietario }</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{ email }</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">{ fecha }</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">{ sintoma }</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    className="bg-indigo-600 font-bold hover:bg-indigo-700 px-10 py-2 rounded-lg transition-colors text-white uppercase"
                    onClick={ () => setPaciente( paciente ) }
                >
                    Editar
                </button>
                <button className="bg-red-600 font-bold hover:bg-red-700 px-10 py-2 rounded-lg transition-colors text-white uppercase">
                    Eliminar
                </button>
            </div>
        </div>
    )
}

Paciente.propTypes = {
    paciente: PropTypes.object.isRequired,
    setPaciente: PropTypes.func.isRequired,
};

export default Paciente