import setDateHours from "./common"
import moveToMonday from "./moveToMonday"

export default isLastWeek
/**
 * 判断 date 是否是上周的时间段（周一00:00:00～周日23:59:59
 * @param date 判断时间
 * @param nowDate 基准时间
 */
function isLastWeek(date: Date, nowDate = new Date): Boolean {
  const lastWeekMonday = moveToMonday(get7DayAgo(nowDate))
  const lastWeekSunday = mondayMoveToSunday(lastWeekMonday)

  return (date >= lastWeekMonday) && (date <= lastWeekSunday)
}

function mondayMoveToSunday(mondayDate: Date): Date {
  if (mondayDate.getDay() !== 1) {
    throw new Error('mondayMoveToSunday: input date is not monday')
  } else {
    const d = new Date(mondayDate)
    d.setDate(d.getDate() + 6)
    return setDateHours(d, 23, 59, 59, 999)
  }
}

function get7DayAgo(date: Date): Date {
  const d = new Date(date)
  d.setDate(d.getDate() - 7)
  return d
}
