import "./topbar.css"
import user from "../../assets/user.jpg"

function TopBar() {
    return (
      <div className="topbar">
      <div className="toggle">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="search">
        <label>
          <input type="text" placeholder="Escriba aquí" id="searchInput" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
      </div>
      <div className="user">
        <img src={user} alt="" /> 
      </div>
    </div>
    )
  }
  
  export default TopBar