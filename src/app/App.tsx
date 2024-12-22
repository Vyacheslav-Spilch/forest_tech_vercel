import './../../global.css'
import { Header } from '../pages/header/Header'
import Layout from './Layout'
import { CssBaseline } from '@mui/material'

const App = () => {

  return (
    <main>
      <CssBaseline />
      <Header />
      <Layout />
    </main>
  )
}

export default App
