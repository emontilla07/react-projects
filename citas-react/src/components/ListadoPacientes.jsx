import Paciente from './Paciente';
import PropTypes from 'prop-types';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5">

            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                    <p className="mb-10 mt-5 text-lg text-center">
                        Administra tus {''}
                        <span className="font-bold text-indigo-600">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={ paciente.id }
                            paciente={ paciente }
                            setPaciente={ setPaciente }
                            eliminarPaciente={ eliminarPaciente }
                        />
                    ))} 
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                    <p className="mb-10 mt-5 text-lg text-center">
                        Comienza agregando pacientes {''}
                        <span className="font-bold text-indigo-600">y aparecerán en este lugar</span>
                    </p>
                </>
            ) }
        </div>
    )
}

ListadoPacientes.propTypes = {
    pacientes: PropTypes.array.isRequired,
    setPaciente: PropTypes.func.isRequired,
    eliminarPaciente: PropTypes.func.isRequired,
};

export default ListadoPacientes;