import setDateHours from "./common"

export default function moveToMonday(date: Date): Date {
  return setDateHours(
    moveToMonday_(new Date(date)),
    0, 0, 0, 0
  )
}

export function moveToMonday_(d: Date): Date {
  if (d.getDay() > 1) {
    // 不是周日和周一
    d.setDate(d.getDate() - (d.getDay() - 1))
    return d
  } else if (d.getDay() === 1) {
    return d
  } else {
    d.setDate(d.getDate() - 6)
    return d
  }
}

export function moveToMonday_old(d: Date): Date {
  if (d.getDay() === 1) {
    return d
  } else {
    d.setDate(d.getDate() - 1)
    return moveToMonday_(d)
  }
}
