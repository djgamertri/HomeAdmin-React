import './AdminSlots.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
import ParkingReport from '../ParkingReport/ParkingReport'
import { faFileExport, faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

export default function AdminSlots () {
  const slots = []

  const parkConfirmation = () => {
    Swal.fire({
      title: '¿Esta seguro de confirmar la asignacion del parqueadero?',
      text: 'Verifique la informacion, esta accion es irreversible!',
      icon: 'warning',
      iconColor: '#ffc107',
      showCancelButton: true,
      confirmButtonColor: '#2a2185',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar asignacion'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Asignados',
          text: 'Se han hecho los cambios',
          icon: 'success',
          confirmButtonColor: '#2a2185'
        })
      }
    })
  }

  const pdfConfirmation = () => {
    let timerInterval
    Swal.fire({
      showConfirmButton: false,
      position: 'top-end',
      toast: 'true',
      title: 'Generando reporte pdf',
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  for (let i = 1; i <= 32; i++) {
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
  return (
    <div className='content-parking'>
      <div className='content-btn'>
        <div className='content-options'>
          <button className='btn-distributio btn-parking' id='asignarParqueaderosButton'>Sortear <FontAwesomeIcon size='xl' icon={faDice} style={{ color: '#ffffff' }} /></button>
          <button onClick={parkConfirmation} className='btn-parking' id='Save'>Guardar</button>
          <PDFDownloadLink
            document={<ParkingReport />}
            fileName='parkingCafam2.pdf'
          >
            <button onClick={pdfConfirmation} className='btn-parking'><FontAwesomeIcon size='lg' icon={faFileExport} style={{ color: '#ffffff' }} /></button>
          </PDFDownloadLink>
        </div>
      </div>
      <div className='content-cardsParking'>{slots}</div>
    </div>
  )
}
