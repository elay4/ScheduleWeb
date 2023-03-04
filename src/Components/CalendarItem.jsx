import React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

const CalendarCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  maxWidth: 275,
  padding: theme.spacing(0),
  textAlign: 'right',
  direction: 'rtl',
  borderRadius: 0,
  color: theme.palette.text.primary,
}))

const CalendarItem = ({ day }) => (
  <Grid item xs={1}>
    <CalendarCard>
      <CardContent>{day}</CardContent>
    </CalendarCard>
  </Grid>
)

export default CalendarItem
