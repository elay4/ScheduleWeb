import Moment from 'moment'

export const hebrewDate = date => {
  const intl = new Intl.DateTimeFormat('he', { month: 'short', day: 'numeric' })
  return intl.format(date)
}

export const getHebrewMonth = date => {
  const intl = new Intl.DateTimeFormat('he', { month: 'long' })
  return intl.format(date)
}

export const range = length =>
  [...Array(length).keys()].map(element => element + 1)

export const numberOfDaysInMonth = (year, month) =>
  new Date(year, month, 0).getDate()

export const roundRowDays = (dayOfTheWeek, daysInCurrentMonth) => {
  if (dayOfTheWeek + daysInCurrentMonth <= 35) {
    return range(7).slice(0, 35 - (dayOfTheWeek + daysInCurrentMonth))
  }
  return range(7).slice(0, 42 - (dayOfTheWeek + daysInCurrentMonth))
}

export const getDaysRangeInMonth = date => {
  const month = date.getMonth()
  const year = date.getFullYear()
  const dayOfTheWeek = Moment(new Date(year, month, 1).toISOString()).day() % 7
  const daysInPrevMonth = numberOfDaysInMonth(year, month)
  const daysInCurMonth = numberOfDaysInMonth(year, month + 1)
  const prevMonthDays =
    dayOfTheWeek > 0 ? range(daysInPrevMonth).slice(-1 * dayOfTheWeek) : []
  const curMonthDays = range(daysInCurMonth)
  const nextMonthDays = roundRowDays(dayOfTheWeek, daysInCurMonth)
  return [...prevMonthDays, ...curMonthDays, ...nextMonthDays]
}
