type Find<ReturnValue extends number | number[]> = <
  P extends string,
  PV,
  Item extends unknown | (Record<P, PV> & Record<string, unknown>)
>(
  list: Item[],
  findFn: (item: Item) => boolean
) => ReturnValue

export const findList: Find<number[]> = (list, findFn) => {
  return list.reduce<number[]>((finded, item, idx) => {
    return findFn(item) ? [...finded, idx] : finded
  }, [])
}

export const findOne: Find<number> = (list, findFn) => list.findIndex(findFn)
