export default function setDateHours(d: Date, ...args: Parameters<Date['setHours']>): Date {
  d.setHours(...args)
  return d
}
