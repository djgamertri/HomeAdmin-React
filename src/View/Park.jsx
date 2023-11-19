import { PDFDownloadLink } from '@react-pdf/renderer'
import Slot from '../Component/ParkingSlot/slot'
import ParkingReport from '../Component/ParkingSlot/ParkingReport/ParkingReport'

function Park () {
  return (
    <div className='content-parking'>
      <div className='content-btn'>
        <div className='content-options'>
          <button className='btn-distributio btn-parking' id='asignarParqueaderosButton'>Asignar Parqueaderos</button>
          <button className='btn-parking' id='Save'>Guardar</button>
          <PDFDownloadLink
            document={<ParkingReport />}
            fileName='parkingCafam2.pdf'
          >
            <button className='btn-parking'>Descargar reporte</button>
          </PDFDownloadLink>
        </div>
      </div>
      <Slot numberOfSlots={32} />
    </div>
  )
}

export default Park
