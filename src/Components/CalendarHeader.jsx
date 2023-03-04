import React from 'react'
import Moment from 'moment'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import { getHebrewMonth } from '../utils'
import { Button } from '@mui/material'

const CalendarHeaderWrapper = styled(Box)(({ theme }) => ({
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}))

const CalendarHeader = ({ date, setDate }) => {
  const handleIncreaseMonth = () =>
    setDate(Moment(date.toISOString()).add(1, 'M').toDate())

  const handleDecreaseMonth = () =>
    setDate(Moment(date.toISOString()).subtract(1, 'M').toDate())

  const handleSetToday = () => setDate(new Date())

  const getCalendarTitle = date =>
    `${getHebrewMonth(date)} ${date.getFullYear()}`

  return (
    <CalendarHeaderWrapper>
      <Button
        onClick={handleSetToday}
        variant="contained"
        sx={{ flexGrow: 0, marginLeft: '1rem' }}
      >
        היום
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5rem',
          flexGrow: 1,
        }}
      >
        <IconButton onClick={handleDecreaseMonth}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography variant="h5" component="h5">
          {getCalendarTitle(date)}
        </Typography>
        <IconButton onClick={handleIncreaseMonth}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </CalendarHeaderWrapper>
  )
}

export default CalendarHeader
