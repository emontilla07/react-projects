import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
    const [ pacientes, setPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [ paciente, setPaciente ] = useState({});

    // No es necesario crear un useEffect para extrar la info de localStorage
    // useEffect(() => {
    //     const obtenerLS = () => {
    //         const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    //         setPacientes(pacientesLS);
    //     }
    //     obtenerLS();
    // }, []);

    useEffect(() => {
        localStorage.setItem( 'pacientes', JSON.stringify( pacientes ) );
    }, [ pacientes ]);

    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );
        setPacientes( pacientesActualizados );
    }

    return (
        <div className="container h-screen mt-20 mx-auto w-11/12">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario
                    pacientes={ pacientes }
                    setPacientes={ setPacientes }
                    paciente={ paciente }
                    setPaciente={ setPaciente }
                />
                <ListadoPacientes
                    pacientes={ pacientes }
                    setPaciente={ setPaciente }
                    eliminarPaciente={ eliminarPaciente }
                />
            </div>
        </div>
    )
}

export default App;