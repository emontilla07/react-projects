const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center  ">Seguimiento Pacientes</h2>

            <p className="mb-10 mt-5 text-center text-lg">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white mb-10 rounded-lg px-5 py-10 shadow-md">
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

export default Formulario;