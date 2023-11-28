import Slot from '../Component/ParkingSlot/Slot'
import SideBar from '../Component/SideBar/sideBar'

function Park () {
  return (
    <SideBar>
      <div class='content-parking'>
        <div class='content-btn'>
          <div><button class='btn-distributio btn-parking' id='asignarParqueaderosButton'>Asignar Parqueaderos</button><button class='btn-parking' id='Save'>Guardar</button></div>
        </div>
        <Slot numberOfSlots={32} />
      </div>
    </SideBar>
  )
}

export default Park
