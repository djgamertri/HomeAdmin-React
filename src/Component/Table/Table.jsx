import React from 'react'
import './Table.css'

function Table (props) {
  const { title, headers, data } = props

  return (
    <div className='TableContent'>
      <div className='cardHeader'>
        <h2>{title}</h2>
        <a href='#' className='btn card open-modal btn' data-open='modal1'>
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
                <a href='#' data-open='modal2' id='update'><span className='status catch-up btn'>Modificar</span></a>
              </td>
              <td>
                <a href='#' data-open='modal2' id='update'><span className='status catch-up btn'>Modificar</span></a>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
