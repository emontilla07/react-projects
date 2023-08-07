import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente }) => {
    const [ nombre, setNombre ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fecha, setFecha ] = useState('');
    const [ sintoma, setSintoma ] = useState('');
    const [ error, setError ] = useState( false );

    useEffect(() => {
        console.log( paciente );
    }, [ paciente ]);

    const generarId = () => {
        const fecha = Date.now().toString( 36 );
        const random = Math.random().toString( 36 ).slice( 2, -1 );

        return fecha + random;
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validacion de formulario
        if ( [ nombre, propietario, email, fecha, sintoma, ].includes('') ) {
            setError( true );
            return;
        }

        setError( false );

        // Creando objeto
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintoma,
            id: generarId(),
        };

        setPacientes([ ...pacientes, objetoPaciente ]);

        // Reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintoma('');
    }

    return (
        <div className="mx-5 md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center  ">Seguimiento Pacientes</h2>

            <p className="mb-10 mt-5 text-center text-lg">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white mb-10 rounded-lg px-5 py-10 shadow-md" onSubmit={ handleSubmit }>
                { error && <Error mensaje='Todos los campos son obligatorios' /> }
                <div>
                    <label
                        htmlFor="mascota"
                        className="block font-bold text-gray-700 uppercase"
                    >
                        Nombre Mascota
                    </label>

                    <input 
                        type="text"
                        placeholder="Nombre de la Mascota"
                        id="mascota"
                        className="border-2 mb-5 mt-2 p-2 placeholder-gray-400 rounded-md w-full
                                   focus:outline outline-2 outline-offset-0 outline-blue-400"
                        value={ nombre }
                        onChange={ e => setNombre( e.target.value ) }
                    />
                </div>

                <div>
                    <label
                        htmlFor="propietario"
                        className="block font-bold text-gray-700 uppercase"
                    >
                        Nombre Propietario
                    </label>

                    <input 
                        type="text"
                        placeholder="Nombre del Propietario"
                        id="propietario"
                        className="border-2 mb-5 mt-2 p-2 placeholder-gray-400 rounded-md w-full
                                   focus:outline outline-2 outline-offset-0 outline-blue-400"
                        value={ propietario }
                        onChange={ e => setPropietario( e.target.value ) }
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block font-bold text-gray-700 uppercase"
                    >
                        Email
                    </label>

                    <input 
                        type="text"
                        placeholder="Email Contacto Propietario"
                        id="email"
                        className="border-2 mb-5 mt-2 p-2 placeholder-gray-400 rounded-md w-full
                                   focus:outline outline-2 outline-offset-0 outline-blue-400"
                        value={ email }
                        onChange={ e => setEmail( e.target.value ) }
                    />
                </div>

                <div>
                    <label
                        htmlFor="alta"
                        className="block font-bold text-gray-700 uppercase"
                    >
                        Alta
                    </label>

                    <input 
                        type="date"
                        id="alta"
                        className="border-2 mb-5 mt-2 p-2 placeholder-gray-400 rounded-md w-full
                                   focus:outline outline-2 outline-offset-0 outline-blue-400"
                        value={ fecha }
                        onChange={ e => setFecha( e.target.value ) }
                    />
                </div>

                <div>
                    <label
                        htmlFor="sintomas"
                        className="block font-bold text-gray-700 uppercase"
                    >
                        Sintomas
                    </label>

                    <textarea
                        id="sintomas"
                        placeholder="Describe los Sintomas"
                        className="border-2 mb-5 mt-2 p-2 placeholder-gray-400 rounded-md w-full
                                   focus:outline outline-2 outline-offset-0 outline-blue-400"
                        value={ sintoma }
                        onChange={ e => setSintoma( e.target.value ) }
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Agregar Paciente"
                        className="bg-indigo-600 cursor-pointer font-bold hover:bg-indigo-700 p-2 transition-colors text-white uppercase w-full"
                    />
                </div>
            </form>
        </div>
    )
}

Formulario.propTypes = {
    pacientes: PropTypes.array.isRequired,
    setPacientes: PropTypes.func.isRequired,
    paciente: PropTypes.object.isRequired,
};

export default Formulario;