import React, { useState, useEffect } from 'react'
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'
import { GetResidentWithParking } from '../../../api/parking'

const styles = StyleSheet.create({
  header: {
    height: 160,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0e4194',
    color: '#ffffff'
  },
  image: {
    height: 70,
    width: 130
  },
  tableContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: 'black'
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    margin: 'auto'
  },
  th: {
    flexBasis: '18%',
    boxSizing: 'border-box',
    padding: 15,
    textAlign: 'left'
  },
  td: {
    flexBasis: '18%',
    boxSizing: 'border-box',
    padding: 15,
    textAlign: 'left'
  },
  tr: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    height: 50
  },
  trEven: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    height: 50
  }
})

function ParkingReport () {
  const date = 'Fecha: ' + new Date().toLocaleDateString()
  const [residentsWithParking, setResidentsWithParking] = useState([])

  useEffect(() => {
    GetResidentWithParking()
      .then(response => {
        setResidentsWithParking(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error)
      })
  }, [])

  // Crear un arreglo de 32 elementos para representar los slots
  const slots = new Array(32).fill(null)

  // Llenar los slots correspondientes con la información de los residentes
  residentsWithParking.forEach(resident => {
    slots[resident.IdSpace - 1] = resident
  })

  return (
    <Document>
      <Page size='TABLOID' orientation='landscape'>
        <View>
          <View style={styles.header}>
            <Image src='https://images.ctfassets.net/3klebcd0t2ch/1NV7oEBY8jt0tXd7fzySKE/cd6a602c1acbfaad8eaa0f6040ddb89d/logo-personas__1_.png' style={styles.image} />
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Conjunto residencial Cafam 2</Text>
          </View>
          <View style={[styles.tableContainer, { padding: 40 }]}>
            <Text>{date}</Text>
            <Text style={{ marginBottom: 20 }}>Reporte de parqueaderos</Text>
            <View style={styles.table}>
              <View style={styles.tr}>
                <Text style={styles.th}>Nro parquedero</Text>
                <Text style={styles.th}>Estado</Text>
                <Text style={styles.th}>Vehiculo asignado</Text>
                <Text style={styles.th}>Responsable</Text>
                <Text style={styles.th}>Casa</Text>
              </View>
              {slots.map((slot, index) => (
                <View style={(index + 1) % 2 === 0 ? styles.trEven : styles.tr} key={index}>
                  <Text style={styles.td}>{index + 1}</Text>
                  {slot
                    ? (
                      <>
                        <Text style={styles.td}>Asignado</Text>
                        <Text style={styles.td}>{slot.Plate}</Text>
                        <Text style={styles.td}>{slot.NameUser}</Text>
                        <Text style={styles.td}>{slot.NumHouse}</Text>
                      </>
                      )
                    : (
                      <>
                        <Text style={styles.td}>-</Text>
                        <Text style={styles.td}>-</Text>
                        <Text style={styles.td}>-</Text>
                        <Text style={styles.td}>-</Text>
                      </>
                      )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default ParkingReport
