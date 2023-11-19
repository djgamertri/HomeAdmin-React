import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer'

// Crear estilos
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
  const rows = []
  const date = 'Fecha: ' + new Date().toLocaleDateString()

  for (let i = 1; i <= 32; i++) {
    rows.push(
      <View style={i % 2 === 0 ? styles.trEven : styles.tr} key={i}>
        <Text style={styles.td}>{i}</Text>
        <Text style={styles.td}>-</Text>
        <Text style={styles.td}>-</Text>
        <Text style={styles.td}>-</Text>
        <Text style={styles.td}>-</Text>
      </View>
    )
  }

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
              {rows}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default ParkingReport
