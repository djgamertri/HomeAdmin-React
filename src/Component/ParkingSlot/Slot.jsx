import AdminSlots from './AdminView/AdminSlots'
import UserSlot from './UserView/UserSlot'

function Slot (props) {
  if (props.userType === 'residente') {
    return (
      <UserSlot />
    )
  } else if (props.userType === 'admin') {
    return (
      <AdminSlots />
    )
  }
}

export default Slot
