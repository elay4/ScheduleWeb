import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Copyright from './Components/Copyright'
import Calendar from './Components/Calendar'
import './styles.css'

function App() {
  return (
    <Container maxWidth="xl">
      <Calendar />
      <Typography variant="h4" component="h1">
        Schedule Website
      </Typography>
      <Copyright />
    </Container>
  )
}

export default App
