import PropTypes from 'prop-types';
import Paciente from './Paciente';

const ListadoPacientes = ({ patients }) => {
    // console.log( patients );
    // patients.map(( patient, index ) => {
    //     console.log({ patient, index });
    // });

    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            { patients && patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-lg text-center mt-5 mb-10">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    { patients.map(( patient ) => (
                        <Paciente key={ patient.id } patients={ patient } />
                    )) }
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg text-center mt-5 mb-10">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                </>
            ) }
        </div>
    )
}

ListadoPacientes.propTypes = {
    patients: PropTypes.array,
};

export default ListadoPacientes

// Usar el index de un arreglo para el key de una iteración es mala pracitica en react.