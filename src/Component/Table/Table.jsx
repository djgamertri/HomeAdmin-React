import React, { useState } from 'react'
import './Table.css'
import Modal from '../Modal/modal'
import RegisterUser from '../../Form/User/Register'
import UpdateUser from '../../Form/User/Udpate'

function Table (props) {
  const { title, headers, data } = props
  const [isModalOpen1, setIsModalOpen1] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)
  return (
    <div className='TableContent'>
      <div className='cardHeader'>
        <h2>{title}</h2>
        <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen1(true)}>
          Añadir
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
    </div>
  )
}

export default Table
