const Paciente = () => {
    return (
        <div className="bg-white mx-5 my-10 px-5 py-10 rounded-lg shadow-md">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">Eric</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">06 de agosto de 2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus assumenda maiores sint rerum praesentium consectetur numquam unde, vitae cumque, animi, vel ullam saepe ratione sapiente. Autem quis voluptates provident qui.</span>
            </p>
        </div>
    )
}

export default Paciente