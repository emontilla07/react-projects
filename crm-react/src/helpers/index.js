export const loader = () => {
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ];

    return clientes;
}

export const action = async ({ request }) => {
    const formData = await request.formData();
    // console.log(formData.get('nombre'));
    const datos = Object.fromEntries(formData);

    const email = formData.get('email');

    // Validación
    const errores = [];

    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios');
    }

    // eslint-disable-next-line no-control-regex, no-useless-escape
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if (!regex.test(email)) {
        errores.push('El Email no es valido');
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
        // console.error('Si hay errores');
        // console.log(Object.keys(errores));
    }

    // return null;
}