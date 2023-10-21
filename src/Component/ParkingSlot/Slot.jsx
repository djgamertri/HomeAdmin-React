import './Slot.css'

function Slot ({ numberOfSlots }) {
  const slots = []

  for (let i = 1; i <= numberOfSlots; i++) {
    slots.push(
      <div className='card' key={i}>
        <div>
          <div className='numbers'>{i}</div>
          <div className='cardPlaca' />
          <div className='NameUser' />
        </div>
      </div>
    )
  }

  return <div class='content-cardsParking'>{slots}</div>
}

export default Slot
