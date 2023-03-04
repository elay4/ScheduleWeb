import Moment from 'moment'

function test() {
  const day = Moment(new Date().toISOString()).day()
  const arr = [1, 2, 3]
  console.log(arr.slice(0, 0))
  console.log(day)
}

test()
