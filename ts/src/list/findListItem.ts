export function findList<
  P extends string,
  PV,
  Item extends Record<P, PV> & Record<string, unknown>
>(
  list: Item[],
  findFn: (item: Item) => boolean
): number {
  return list.findIndex((item) => {
    return findFn(item)
  })
}

export function findListByProperty<
  P extends string,
  PV,
  Item extends Record<P, PV> & Record<string, unknown>
>(list: Item[], findProperty: P, propertyValue: PV) {
  return findList(
    list,
    (item) => item[findProperty] === propertyValue
  )
}
