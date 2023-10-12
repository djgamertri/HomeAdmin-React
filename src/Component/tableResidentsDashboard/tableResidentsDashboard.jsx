import "./tableResidentsDashboard.css"
import { NavLink } from 'react-router-dom'

function TableResidentDashboard() {
    return (
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Residentes</h2>
                    <NavLink to={"/Resident"}>
                        <p className="btn">Ver todo</p>
                    </NavLink>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Nombre</td>
                            <td>Casa</td>
                            <td>Estado</td>
                            <td>Estado</td>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <td>Juan Esteban Murcia</td>
                            <td>205</td>
                            <td>Activo</td>
                            <td><span className="status catch-up">Al dia</span></td>
                        </tr>
                        <tr>
                            <td>Andres Fernando Malagon</td>
                            <td>101</td>
                            <td>Activo</td>
                            <td><span className="status catch-up">Al dia</span></td>
                        </tr>
                        <tr>
                            <td>Laura Valentina Aguilar</td>
                            <td>200</td>
                            <td>Activo</td>
                            <td><span className="status delivered">Debe</span></td>
                        </tr>
                        <tr>
                            <td>Juan Sebastian Peña</td>
                            <td>199</td>
                            <td>Activo</td>
                            <td><span className="status catch-up">Al dia</span></td>
                        </tr>
                        <tr>
                            <td>Erick Rodriguez</td>
                            <td>113</td>
                            <td>Activo</td>
                            <td><span className="status delivered">Debe</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

    )
}

export default TableResidentDashboard