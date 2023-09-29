import { useLoaderData } from 'react-router-dom';

export const Index = () => {
    const datos = useLoaderData();
    console.log(datos);

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>

            <p className="mt-3">Administra tus clientes</p>
        </>
    )
}
