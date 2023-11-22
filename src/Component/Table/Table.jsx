import React, { useState } from 'react'
import './Table.css'
import Modal from '../Modal/modal'
import RegisterFee from '../../Form/Fee/FeeForm'
import UpdateFee from '../../Form/Fee/Update'
import AssignParking from '../../Form/Parking/Assign'

function Table (props) {
  const { title, headers, data } = props

  // Fee
  const [isModalOpenRegisterFee, setisModalOpenRegisterFee] = useState(false)
  const [isModalOpenUpdateFee, setisModalOpenUpdateFee] = useState(false)

  // Parking
  const [isModalOpenAssingParking, setisModalOpenAssingParking] = useState(false)

  return (
    <div className='TableContent'>
      <div className='cardHeader'>
        <h2>{title}</h2>
        <a href='#' className='btn card open-modal btn' onClick={() => setisModalOpenRegisterFee(true)}>
          Añadir
        </a>
        {/* Fee Register */}
        <a href='#' className='btn card open-modal btn' onClick={() => setisModalOpenRegisterFee(true)}>
          Añadir Tarifa
        </a>
        {/* Fee Register */}
        <a href='#' className='btn card open-modal btn' onClick={() => setisModalOpenAssingParking(true)}>
          Asignar Parqueadero
        </a>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody id='tableBody'>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {item.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
              <td>
                <a><span className='status update btn' onClick={() => setisModalOpenRegisterFee(true)}>Modificar</span></a>
              </td>
              <td>
                <a href='#' data-open='modal2' id='update'><span className='status delete btn'>Eliminar</span></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpenRegisterFee} closeModal={() => setisModalOpenRegisterFee(false)} title='Registrar Tarifa'>
        <RegisterFee />
      </Modal>
      <Modal isOpen={isModalOpenUpdateFee} closeModal={() => setisModalOpenUpdateFee(false)} title='Actualizar Tarifa'>
        <UpdateFee />
      </Modal>
      <Modal isOpen={isModalOpenAssingParking} closeModal={() => setisModalOpenAssingParking(false)} title='Asignar parqueadero'>
        <AssignParking />
      </Modal>
    </div>
  )
}

export default Table
