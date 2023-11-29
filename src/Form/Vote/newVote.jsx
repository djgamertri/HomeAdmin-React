import React, { useState } from 'react'

const VotacionForm = ({ onCreateVotacion }) => {
  const [titulo, setTitulo] = useState('')
  const [opciones, setOpciones] = useState(['', ''])

  const handleAgregarOpcion = () => {
    setOpciones([...opciones, ''])
  }

  const handleEliminarOpcion = (index) => {
    const nuevasOpciones = opciones.filter((_, i) => i !== index)
    setOpciones(nuevasOpciones)
  }

  const handleGuardarVotacion = () => {
    const nuevaVotacion = {
      titulo,
      opciones,
      votos: Array(opciones.length).fill(0)
    }
    onCreateVotacion(nuevaVotacion)
  }

  return (
    <div className='votacion-form'>
      <h2>Crear Nueva Votación</h2>
      <label htmlFor='titulo'>Título:</label>
      <input
        type='text'
        id='titulo'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label>Opciones:</label>
      {opciones.map((opcion, index) => (
        <div key={index}>
          <input
            type='text'
            value={opcion}
            onChange={(e) => {
              const nuevasOpciones = [...opciones]
              nuevasOpciones[index] = e.target.value
              setOpciones(nuevasOpciones)
            }}
          />
          <button onClick={() => handleEliminarOpcion(index)}>Eliminar</button>
        </div>
      ))}
      <button onClick={handleAgregarOpcion}>Agregar Opción</button>

      <button onClick={handleGuardarVotacion}>Crear Votación</button>
    </div>
  )
}

export default VotacionForm
