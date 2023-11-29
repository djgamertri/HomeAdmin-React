import SideBar from '../Component/SideBar/sideBar'
import Slot from '../Component/ParkingSlot/Slot'

function Park () {
  return (
    <SideBar>
      <Slot userType='admin' />
    </SideBar>
  )
}

export default Park
