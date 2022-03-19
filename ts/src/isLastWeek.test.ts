import isLastWeek from "./isLastWeek"

const WEEK_DAY = [
  'monday', 'tuesday', 'wednesday',
  'thursday', 'friday', 'saturday', 'sunday'
] as const
type WeekDay = typeof WEEK_DAY[number]
type Week = Readonly<{
  [k in WeekDay]: Date
}>
const lastWeek: Week = {
  monday: new Date('2022/03/07'),
  tuesday: new Date('2022/03/08'),
  wednesday: new Date('2022/03/09'),
  thursday: new Date('2022/03/10'),
  friday: new Date('2022/03/11'),
  saturday: new Date('2022/03/12'),
  sunday: new Date('2022/03/13'),
}
const currentWeek: Week = {
  monday: new Date('2022/03/14'),
  tuesday: new Date('2022/03/15'),
  wednesday: new Date('2022/03/16'),
  thursday: new Date('2022/03/17'),
  friday: new Date('2022/03/18'),
  saturday: new Date('2022/03/19'),
  sunday: new Date('2022/03/20'),
}

test('isLastWeek return true', () => {
  WEEK_DAY.forEach(day => {
    const lastWeekDate = lastWeek[day]
    const baseDate = currentWeek[day]
    expect(isLastWeek(lastWeekDate, baseDate)).toBe(true)
  })
})

test('isLastWeek return false', () => {
  expect(isLastWeek(new Date, new Date)).toBe(false)

  WEEK_DAY.forEach(day => {
    const lastWeekDate = lastWeek[day]
    const baseDate = currentWeek[day]
    expect(isLastWeek(baseDate, lastWeekDate)).toBe(false)
  })
})
