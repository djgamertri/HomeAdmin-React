import MarkdownRenderer from '../Component/MarkDownRender/MarkdownRenderer'
import SideBar from '../Component/SideBar/sideBar'

function Help () {
  return (
    <SideBar>
      <div className='Docs'>

        <MarkdownRenderer source='src\Docs\Manual-Usuario.md' />
      </div>
    </SideBar>
  )
}

export default Help
