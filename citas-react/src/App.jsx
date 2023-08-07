import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
    const [ pacientes, setPacientes ] = useState([]);
    const [ paciente, setPaciente ] = useState({});

    return (
        <div className="container h-screen mt-20 mx-auto w-11/12">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario pacientes={ pacientes } setPacientes={ setPacientes } paciente={ paciente } />
                <ListadoPacientes pacientes={ pacientes } setPaciente={ setPaciente } />
            </div>
        </div>
    )
}

export default App;