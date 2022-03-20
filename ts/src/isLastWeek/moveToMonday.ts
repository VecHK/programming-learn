import setDateHours from "./common"

export default function moveToMonday(date: Date): Date {
  return setDateHours(
    moveToMonday_(new Date(date)),
    0, 0, 0, 0
  )
}

const dayFromMonday = (d: Date) => (d.getDay() || 7) - 1
export function moveToMonday_(d: Date): Date {
  d.setDate(d.getDate() - dayFromMonday(d))
  return d
}

export function moveToMonday_old(d: Date): Date {
  if (d.getDay() === 1) {
    return d
  } else {
    d.setDate(d.getDate() - 1)
    return moveToMonday_(d)
  }
}
