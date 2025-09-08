import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import IndexPage from './pages'
import CreateTicket from './pages/create-ticket'


function App()
{

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='raise-ticket' element={<CreateTicket />} />
      </Route>
    </Routes>
  )
}

export default App
