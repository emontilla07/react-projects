import PropTypes from 'prop-types';

export const Cliente = ({ cliente }) => {
    const { email, empresa, nombre, telefono } = cliente;

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{ nombre }</p>
                <p>{ empresa }</p>
            </td>

            <td className="p-6 space-y-2">
                <p className="text-gray-600"><span className="font-bold text-gray-800 uppercase">Email: </span>{ email }</p>
                <p className="text-gray-600"><span className="font-bold text-gray-800 uppercase">Tel: </span>{ telefono }</p>
            </td>

            <td className="flex justify-end gap-8 p-6">
                <button
                    type="button"
                    className="bg-blue-600 font-bold hover:bg-blue-700 px-9 py-3     rounded-lg text-white uppercase"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="bg-red-600 font-bold hover:bg-red-700 px-9 py-3     rounded-lg text-white uppercase"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

Cliente.propTypes = {
    cliente: PropTypes.object,
};