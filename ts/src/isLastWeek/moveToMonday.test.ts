import dayjs from 'dayjs'
import moveToMonday from './moveToMonday'

const toDayString = (d: Date) => dayjs(d).format('YYYY/MM/DD HH:mm:ss:SSS')

test('moveToMonday', () => {
  const monday = new Date('2022/03/14 22:33:44:921')
  const tuesday = new Date('2022/03/15 22:33:44:921')
  const wednesday = new Date('2022/03/16 22:33:44:921')
  const thursday = new Date('2022/03/17 22:33:44:921')
  const friday = new Date('2022/03/18 22:33:44:921')
  const saturday = new Date('2022/03/19 22:33:44:921')
  const sunday = new Date('2022/03/20 22:33:44:921')

  const results = [
    moveToMonday(monday),
    moveToMonday(tuesday),
    moveToMonday(wednesday),
    moveToMonday(thursday),
    moveToMonday(friday),
    moveToMonday(saturday),
    moveToMonday(sunday)
  ]

  for (const result of results) {
    expect(toDayString(result)).toBe('2022/03/14 00:00:00:000')
  }
})
