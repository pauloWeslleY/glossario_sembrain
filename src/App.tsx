import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'

export function App() {
  return (
    <>
      <NavBar title="Glossário" />
      <Outlet />
    </>
  )
}
