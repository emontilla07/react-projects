/* eslint-disable no-unused-vars */
import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
    const [ patients, setPatients ] = useState([]);
    const [ patient, setPatient ] = useState({});

    return (
        <div className="container mx-auto w-11/12 mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario patients={ patients } setPatients={ setPatients } />
                <ListadoPacientes patients={ patients } setPatient={ setPatient } patient={ patient } />
            </div>
        </div>
    )
}

export default App
