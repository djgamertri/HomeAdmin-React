import React, { useState } from 'react'
import './Table.css'
import Modal from '../Modal/modal'

function Table (props) {
  const { title, headers, data } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='TableContent'>
      <div className='cardHeader'>
        <h2>{title}</h2>
        <a href='#' className='btn card open-modal btn' onClick={() => setIsModalOpen(true)}>
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
                <a href='#' data-open='modal2' id='update'><span className='status update btn'>Modificar</span></a>
              </td>
              <td>
                <a href='#' data-open='modal2' id='update'><span className='status delete btn'>Eliminar</span></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Table
