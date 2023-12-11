import React, { useState, useEffect } from 'react'
import { GetResidentWithParking, GetResidentWithOutParking, PostNewParking } from '../../../api/parking'
import './AdminSlots.css'
import { PDFDownloadLink } from '@react-pdf/renderer'
import ParkingReport from '../ParkingReport/ParkingReport'
import { faFileExport, faDice, faBroom } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

export default function AdminSlots () {
  const [residentsWithParking, setResidentsWithParking] = useState([])
  const [residentsWithoutParking, setResidentsWithoutParking] = useState([])
  const [slots, setSlots] = useState(new Array(32).fill(null))

  useEffect(() => {
    GetResidentWithParking()
      .then(response => {
        setResidentsWithParking(response.data)

        const initialSlots = new Array(32).fill(null)
        response.data.forEach(resident => {
          initialSlots[resident.IdSpace - 1] = { ...resident, class: 'asignedSlot' }
        })
        setSlots(initialSlots)
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
    const newSlots = slots.map(slot => slot && slot.class !== 'provisionalSlot' ? slot : null)
    const availableSlots = newSlots.filter(slot => slot === null)

    if (residentsWithoutParking.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'No hay residentes sin asignacion!'
      })
    } else {
      if (residentsWithoutParking.length === 1) {
        const availableSlotIndex = newSlots.findIndex(slot => slot === null)
        if (availableSlotIndex !== -1) {
          newSlots[availableSlotIndex] = { ...residentsWithoutParking[0], class: 'provisionalSlot', IdSpace: availableSlotIndex + 1 }
        }
      } else if (availableSlots.length === 1 && residentsWithoutParking.length > 1) {
        // Sortear la lista de residentes sin parqueadero
        const sortedResidents = [...residentsWithoutParking].sort(() => Math.random() - 0.5)
        // Asignar el primer residente sorteado al único slot libre
        const availableSlotIndex = newSlots.findIndex(slot => slot === null)
        newSlots[availableSlotIndex] = { ...sortedResidents[0], class: 'provisionalSlot', IdSpace: availableSlotIndex + 1 }
      } else {
        // Sortear la lista de residentes sin parqueadero
        const sortedResidents = [...residentsWithoutParking].sort(() => Math.random() - 0.5)
        // Asignar los residentes sorteados a los primeros slots libres
        sortedResidents.forEach(resident => {
          const availableSlotIndex = newSlots.findIndex(slot => slot === null)
          if (availableSlotIndex !== -1) {
            newSlots[availableSlotIndex] = { ...resident, class: 'provisionalSlot', IdSpace: availableSlotIndex + 1 }
          }
        })
      }
      setSlots(newSlots)
    }
  }

  const cleanTemporal = () => {
    // Limpiar solo los slots temporales
    const newSlots = slots.map(slot => slot && slot.class !== 'provisionalSlot' ? slot : null)
    setSlots(newSlots)
  }

  const parkConfirmation = async () => {
    const confirmation = await Swal.fire({
      title: 'Confirmar asignación de parqueaderos',
      html: '¿Está seguro de confirmar la asignación de parqueaderos? Esta acción es irreversible.',
      icon: 'warning',
      iconColor: '#ffc107',
      showCancelButton: true,
      confirmButtonColor: '#2a2185',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar asignación'
    })

    if (confirmation.isConfirmed) {
      if (residentsWithParking.length < 32 && residentsWithoutParking.length >= 1) {
        // Save provisional assignments to the database
        const data = slots
          .filter(slot => slot && slot.class === 'provisionalSlot')
          .map(slot => ({
            parqueadero: slot.IdSpace,
            placa: parseInt(slot.Plate)
          }))

        try {
          await PostNewParking(data)

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: toast => {
              toast.onmouseenter = Swal.stopTimer
              toast.onmouseleave = Swal.resumeTimer
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Asignando parqueaderos'
          })

          // Fetch latest resident information
          const updatedResidentsWithParking = await GetResidentWithParking()

          // Extract data array
          const residentDataWithParking = updatedResidentsWithParking.data

          const updatedResidentsWithoutParking = await GetResidentWithOutParking()

          const residentDataWithoutParking = updatedResidentsWithoutParking.data

          // Update slots and resident information
          setSlots(slots.map(slot => {
            if (slot && slot.class === 'provisionalSlot') {
              const assignedResident = residentDataWithParking.find(resident => resident.IdSpace === slot.IdSpace)
              return { ...assignedResident, class: 'asignedSlot' }
            }
            return slot
          }))

          setResidentsWithParking(residentDataWithParking)
          console.log(residentDataWithParking)
          setResidentsWithoutParking(residentDataWithoutParking)
          console.log(residentDataWithoutParking)
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrió un error: ' + error
          })
        }
      } else if (residentsWithParking.length >= 32) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Todos los espacios estan asignados'
        })
      } else if (residentsWithoutParking.length === 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'No hay residentes que asignar'
        })
      }
    }
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
    })
  }

  return (
    <div className='content-parking'>
      <div className='content-btn'>
        <div className='content-options'>
          <button onClick={handleSort} className='btn-distribution btn-parking' id='asignarParqueaderosButton'>Sortear <FontAwesomeIcon size='xl' icon={faDice} style={{ color: '#ffffff' }} /></button>
          <button onClick={cleanTemporal} className='btn-parking'>Limpiar <FontAwesomeIcon size='lg' icon={faBroom} style={{ color: '#ffffff' }} /></button>
          <button onClick={parkConfirmation} className='btn-parking' id='Save'>Guardar</button>
          <PDFDownloadLink
            document={<ParkingReport />}
            fileName='parkingCafam2.pdf'
          >
            <button onClick={pdfConfirmation} className='btn-parking'><FontAwesomeIcon size='lg' icon={faFileExport} style={{ color: '#ffffff' }} /></button>
          </PDFDownloadLink>
        </div>
      </div>
      <div className='content-cardsParking'>
        {slots.map((slot, index) => {
          if (slot) {
            return (
              <div className={slot.class} key={index}>
                <div>
                  <div className='numbers'>{index + 1}</div>
                  <div className='cardPlaca'>{slot.Plate}</div>
                  <div className='NameUser'>{slot.NameUser}</div>
                </div>
              </div>
            )
          }

          return (
            <div className='card' key={index}>
              <div>
                <div className='numbers'>{index + 1}</div>
                <div className='emptySlot' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
