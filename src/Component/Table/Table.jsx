import React, { useState } from 'react'
import './Table.css'
import Modal from '../Modal/modal'
import Login from '../../Form/Login/Login'
import RegisterUser from '../../Form/User/Register'
import UpdateUser from '../../Form/User/Update'
import RegisterFee from '../../Form/Fee/Register'
import UpdateFee from '../../Form/Fee/Update'
import AssignParking from '../../Form/Parking/Assign'

function Table (props) {
  const { title, headers, data } = props
  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

  // Fee
  const [isModalOpen3, setIsModalOpen3] = useState(false)
  const [isModalOpen4, setIsModalOpen4] = useState(false)

  // Parking
  const [isModalOpen5, setIsModalOpen5] = useState(false)

  // Login
  const [isModalOpen6, setIsModalOpen6] = useState(false)
  return (
    <div className='TableContent'>
      <div className='cardHeader'>
        <h2>{title}</h2>
        <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen1(true)}>
          Añadir
        </a>
        {/* Fee Register */}
        <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen3(true)}>
          Añadir Tarifa
        </a>
        {/* Fee Register */}
        <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen5(true)}>
          Asignar Parqueadero
        </a>
        {/* Login Register */}
        <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen6(true)}>
          Login
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
                <a href='#' data-open='modal2' id='update'><span className='status update btn' onClick={() => setIsModalOpen2(true)}>Modificar</span></a>
              </td>
              {/* Fee Update */}
              <td>
                <a href='#' data-open='modal2' id='update'><span className='status update btn' onClick={() => setIsModalOpen4(true)}>Modificar Fee</span></a>
              </td>
              <td>
                <a href='#' data-open='modal2' id='update'><span className='status delete btn'>Eliminar</span></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen1} closeModal={() => setIsModalOpen1(false)} title='Registrar Usuario'>
        <RegisterUser />
      </Modal>
      <Modal isOpen={isModalOpen2} closeModal={() => setIsModalOpen2(false)} title='Actualizar Usuario'>
        <UpdateUser />
      </Modal>
      <Modal isOpen={isModalOpen3} closeModal={() => setIsModalOpen3(false)} title='Registrar Tarifa'>
        <RegisterFee />
      </Modal>
      <Modal isOpen={isModalOpen4} closeModal={() => setIsModalOpen4(false)} title='Actualizar Tarifa'>
        <UpdateFee />
      </Modal>
      <Modal isOpen={isModalOpen5} closeModal={() => setIsModalOpen5(false)} title='Asignar parqueadero'>
        <AssignParking />
      </Modal>
      <Modal isOpen={isModalOpen6} closeModal={() => setIsModalOpen6(false)} title='Login'>
        <Login />
      </Modal>
    </div>
  )
}

export default Table
