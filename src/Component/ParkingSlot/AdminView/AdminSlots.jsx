import React, { useState, useEffect } from 'react'
import { GetResidentWithParking, GetResidentWithOutParking } from '../../../api/parking'
import './AdminSlots.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
import ParkingReport from '../ParkingReport/ParkingReport'
import { faFileExport, faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

export default function AdminSlots () {
  const [residentsWithParking, setResidentsWithParking] = useState([])
  const [residentsWithoutParking, setResidentsWithoutParking] = useState([])

  useEffect(() => {
    GetResidentWithParking()
      .then(response => {
        setResidentsWithParking(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error)
      })

    GetResidentWithOutParking()
      .then(response => {
        setResidentsWithoutParking(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }, [])

  const handleSort = () => {
    // Seleccionar un residente sin parqueadero de manera aleatoria
    const randomIndex = Math.floor(Math.random() * residentsWithoutParking.length)
    const selectedResident = residentsWithoutParking[randomIndex]

    // Encontrar el primer slot vacío
    const emptySlotIndex = slots.findIndex(slot => !slot)

    // Asignar el residente seleccionado al slot vacío
    if (emptySlotIndex !== -1) {
      const newSlots = [...slots]
      newSlots[emptySlotIndex] = selectedResident
      setSlots(newSlots)
    }
  }

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

  // Crear un arreglo de 32 elementos para representar los slots
  const slots = new Array(32).fill(null)

  // Llenar los slots correspondientes con la información de los residentes
  residentsWithParking.forEach(resident => {
    slots[resident.IdSpace - 1] = resident
  })

  return (
    <div className='content-parking'>
      <div className='content-btn'>
        <div className='content-options'>
          <button onClick={handleSort} className='btn-distributio btn-parking' id='asignarParqueaderosButton'>Sortear <FontAwesomeIcon size='xl' icon={faDice} style={{ color: '#ffffff' }} /></button>          <button onClick={parkConfirmation} className='btn-parking' id='Save'>Guardar</button>
          <PDFDownloadLink
            document={<ParkingReport />}
            fileName='parkingCafam2.pdf'
          >
            <button onClick={pdfConfirmation} className='btn-parking'><FontAwesomeIcon size='lg' icon={faFileExport} style={{ color: '#ffffff' }} /></button>
          </PDFDownloadLink>
        </div>
      </div>
      <div className='content-cardsParking'>
        {slots.map((slot, index) => (
          <div className={`${slot ? 'asignedSlot' : 'card'}`} key={index}>
            <div>
              <div className='numbers'>{index + 1}</div>
              {slot
                ? (
                  <>
                    <div className='cardPlaca'>{slot.Plate}</div>
                    <div className='NameUser'>{slot.NameUser}</div>
                  </>
                  )
                : (
                  <div className='emptySlot' />
                  )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
