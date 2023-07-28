import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({ patients, setPatients, patient }) => {
    const [ name, setName ] = useState('');
    const [ owner, setOwner ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ newDate, setNewDate ] = useState('');
    const [ symptoms, setSymptoms ] = useState('');
    const [ error, setError ] = useState( false );

    useEffect(() => {
        
    }, [ patient ])
    

    // Function to handle change on inputs
    // const onInputChange = ({ target: { value } }) => {
    //     setName(value);
    // }

    const onResetForm = () => {
        setName('');
        setOwner('');
        setEmail('');
        setNewDate('');
        setSymptoms('');
        setError(false);
    }

    const generatedId = () => {
        const random = Math.random().toString( 36 ).slice( 2, -1 );
        const date = Date.now().toString( 36 );

        return date + random;
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ([ name, owner, email, newDate, symptoms ].includes('')) {
            setError( true );
            return;
        }

        setError( false );

        const newPatients = {
            name,
            owner,
            email,
            newDate,
            symptoms,
            id: generatedId(),
        };

        setPatients([ ...patients, newPatients ]);

        onResetForm();
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                { error && <Error><p>Todos los campos son obligatorios</p></Error> }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                        value={ name }
                        onChange={ ({ target: { value } }) => setName(value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="propietario"
                        value={ owner }
                        onChange={ ({ target: { value } }) => setOwner(value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        value={ email }
                        onChange={ ({ target: { value } }) => setEmail(value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                        value={ newDate }
                        onChange={ ({ target: { value } }) => setNewDate(value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="sintomas"
                        value={ symptoms }
                        onChange={ ({ target: { value } }) => setSymptoms(value) }
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursonr pointer transition-color 
                               hover:bg-indigo-700 cursor-pointer transition-colors"

                />
            </form>
        </div>
    )
}

Formulario.propTypes = {
    patients: PropTypes.array,
    setPatients: PropTypes.func,
    patient: PropTypes.object,
};

export default Formulario