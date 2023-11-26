import './PdfExcel.css'

function PdfExcel ({ generatePdf, excel }) {
  return (
    <div className='header'>
      {excel && (
        <a className='btn-Pdf-Excel import'>
          <i className='fa-solid fa-download' /> <span>Importar Excel</span>
        </a>
      )}
      <a className='btn-Pdf-Excel report' onClick={generatePdf}>
        <i className='fa-solid fa-download' /> <span>Descargar Pdf</span>
      </a>
    </div>
  )
}

export default PdfExcel
