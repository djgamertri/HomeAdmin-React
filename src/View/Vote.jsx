import SideBar from '../Component/SideBar/sideBar'
import VotacionForm from './VotacionForm'
import VotacionList from './VotacionList'

function Vote () {
  const [votaciones, setVotaciones] = useState([])

  const handleCreateVotacion = (nuevaVotacion) => {
    setVotaciones([...votaciones, nuevaVotacion])
  }

  const handleVotar = (votacionIndex, opcionIndex) => {
    const nuevasVotaciones = [...votaciones]
    nuevasVotaciones[votacionIndex].votos[opcionIndex]++
    setVotaciones(nuevasVotaciones)
  }
  return (
    <><SideBar />
      <div className='app-container'>
        <VotacionForm onCreateVotacion={handleCreateVotacion} />
        <VotacionList votaciones={votaciones} onVotar={handleVotar} />
      </div>
    </>
  )
}

export default Vote
