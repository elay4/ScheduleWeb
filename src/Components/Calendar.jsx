import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CalendarItem from './CalendarItem'
import CalendarHeader from './CalendarHeader'

import { getDaysRangeInMonth } from '../utils'

const Calendar = () => {
  const [date, setDate] = useState(new Date())

  const DaysOfTheWeek = () => {
    const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
    return days.map(day => (
      <Grid
        item
        xs={1}
        sx={{ borderRadius: 0, border: '1px solid black' }}
        key={day}
      >
        <Card>
          <CardContent>{day}</CardContent>
        </Card>
      </Grid>
    ))
  }

  return (
    <Container maxWidth="xl">
      <CalendarHeader date={date} setDate={setDate} />
      <Grid container spacing={0} columns={7} direction={'row-reverse'}>
        <DaysOfTheWeek />
        {getDaysRangeInMonth(date).map((day, index) => (
          <CalendarItem day={day} key={`${index}-${day}`} />
        ))}
      </Grid>
    </Container>
  )
}

export default Calendar
