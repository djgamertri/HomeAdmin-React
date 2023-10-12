import "./cardDashboard.css"

function CardDashboard (){
    return (
        <div className="content-cards">
      <div className="card open-modal btn" data-open="modal1">
        <div>
          <div className="numbers">Registrar</div>
          <div className="cardName">Registrar residente</div>
        </div>
        <div className="iconCard">
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="card open-modal btn">
        <div>
          <a href="graficos.html">
            <div className="numbers">Consultar</div>
            <div className="cardName">Consultar residente</div>
          </a>
        </div>
        <div className="iconCard">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="card open-modal btn" data-open="modal2">
        <div>
          <div className="numbers">Modificar</div>
          <div className="cardName">Modificar Residente</div>
        </div>
        <div className="iconCard">
          <i className="fa-solid fa-rotate-right"></i>
        </div>
      </div>
      <div className="card open-modal btn">
        <div>
          <a href="">
            <div className="numbers">Eliminar</div>
            <div className="cardName">Eliminar Residente</div>
          </a>
        </div>
        <div className="iconCard">
          <i className="fa-solid fa-delete-left"></i>
        </div>
      </div>
    </div>
    )
}

export default CardDashboard
/* */