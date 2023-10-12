import "./TableUserDashboard.css"
import user from "../../assets/user.jpg"


function TableUserDashboard(){
    return (
        <div className="update-users">
        <div className="cardHeader">
          <h2>Residentes</h2>
        </div>
        <table>
          <tr>
            <td className="content-td">
              <div className="User-img"><img src={user} alt=""/></div>
            </td>
            <td>
              <h4>Nombre residente <br/> <span>205</span></h4>
            </td>
          </tr>
          <tr>
            <td className="content-td">
              <div className="User-img"><img src={user} alt=""/></div>
            </td>
            <td>
              <h4>Nombre residente <br/> <span>205</span></h4>
            </td>
          </tr>
          <tr>
            <td className="content-td">
              <div className="User-img"><img src={user} alt=""/></div>
            </td>
            <td>
              <h4>Nombre residente <br/> <span>205</span></h4>
            </td>
          </tr>
          <tr>
            <td className="content-td">
              <div className="User-img"><img src={user} alt=""/></div>
            </td>
            <td>
              <h4>Nombre residente <br/> <span>205</span></h4>
            </td>
          </tr>
          <tr>
            <td className="content-td">
              <div className="User-img"><img src={user} alt=""/></div>
            </td>
            <td>
              <h4>Nombre residente <br/> <span>205</span></h4>
            </td>
          </tr>
          <tr>
            <td className="content-td">
              <div className="User-img"><img src={user} alt=""/></div>
            </td>
            <td>
              <h4>Nombre residente <br/> <span>205</span></h4>
            </td>
          </tr>
        </table>
      </div>
    )
}

export default TableUserDashboard