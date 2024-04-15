import './App.css'
import { Outlet } from 'react-router-dom'
import ConfirmUser from './components/ConfirmUser'



function App() {

  return (
    <>
      <Outlet />
      {/* <ConfirmUser /> */}
    </>
  )
}

export default App
