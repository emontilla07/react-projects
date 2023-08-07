import Paciente from './Paciente';

const ListadoPacientes = () => {
    return (
        <div className="md:h-screen overflow-y-scroll md:w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

            <p className="mb-10 mt-5 text-lg text-center">
                Administra tus {''}
                <span className="font-bold text-indigo-600">Pacientes y Citas</span>
            </p>

            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}

export default ListadoPacientes;