import { Link, Outlet, useLocation } from "react-router-dom"

export const Layout = () => {
    const location = useLocation();

    return (
        <div className="md:flex md:min-h-screen">
            <aside className="bg-blue-900 md:w-1/4 px-5 py-10">
                <h2 className="font-black text-4xl text-center text-white">CRM - Clientes</h2>

                <nav className="mt-10">
                    <Link className={ `${ location.pathname === '/' ? 'text-blue-300' : 'text-white' } block hover:text-blue-300 mt-2 text-2xl` } to="/">Clientes</Link>
                    <Link className={ `${ location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white' } block hover:text-blue-300 mt-2 text-2xl` } to="/clientes/nuevo">Nuevo Cliente</Link>
                </nav>
            </aside>

            <main className="md:h-screen md:w-3/4 p-10 overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
}
