import React from 'react'
import Container from '@mui/material/Container'
import Copyright from './Components/Copyright'
import Calendar from './Components/Calendar'
import Navbar from './Components/Navbar'
import './styles.css'

function App() {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Calendar />
      <Copyright />
    </Container>
  )
}

export default App
