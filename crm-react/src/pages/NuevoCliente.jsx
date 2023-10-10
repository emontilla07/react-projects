import { Form, useNavigate } from 'react-router-dom';
import { Formulario } from '../components/Formulario';

export const NuevoCliente = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 font-bold px-6 py 2 text-white uppercase"
                    onClick={ () => navigate(-1) }
                    type="button"
                >
                    Volver
                </button>
            </div>

            <div className="bg-white md:w-3/4 mt-20 mx-auto px-5 py-10 rounded-md shadow">
                <Form
                    method="POST"
                >
                    <Formulario  />
                    <input
                        className="bg-blue-800 font-bold mt-5 p-3 text-lg text-white uppercase w-full"
                        type="submit"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )
}
