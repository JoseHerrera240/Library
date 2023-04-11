import './HomeAdmin.sass'

const HomeAdmin = () => {
    return (
        <>
            <h1>homeAdmin</h1>
            <table className="tableAdmin">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>disponibilidad para rentar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>IN home</td>
                        <td>Terror</td>
                        <td>3.000</td>
                        <td>Disponible</td>
                        <td>
                            <button>lulo</button>
                            <button>lulo</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default HomeAdmin