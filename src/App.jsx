import Sidebar from './components/Sidebar/Sidebar' 
import Main from './components/Main/Main'

const App = () => {
  return (
    <div className='flex flex-row size-full'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App